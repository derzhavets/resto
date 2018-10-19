const Models = require('./schema');

exports.createResto = function (req, res) {
    let resto = new Models.Resto({
        name: req.body.name,
        numOfTables: req.body.numOfTables
    });

    for (let i = 0; i < req.body.numOfTables; i++) {
        let table = new Models.Table({
            number: i + 1,
            resto: resto._id
        });

        resto.tables.push(table);

        table.save(function (err) {
            if (err) { res.send(err) };
        })
    }

    resto.save(function (err) {
        if (err) { res.send(err) };
        Models.Resto.findById(resto._id, function (err, data) {
            res.send(data);
        })
    })
};

exports.getAllRestos = function (req, res) {
    Models.Resto.find(function (err, restos) {
        if (err) { res.send(err) };
        res.send(restos);
    })
};

exports.getResto = function (req, res) {
    Models.Resto.findById(req.params.id)
        .populate({
            path: 'tables',
            populate: { path: 'reservations' }
        })
        .exec(function (err, data) {
            if (err) { res.send(err) };
            res.send(data);
        })
};

exports.createReservation = function (req, res) {

    let table = Models.Table.findById(req.params.id, function (err, table) {
        let reservation = new Models.Reservation({
            name: req.body.name,
            date: req.body.date,
            guests: req.body.guests,
            table: table._id
        });

        table.reservations.push(reservation);

        reservation.save(function (err, reservation) {
            if (err) { res.send(err) };
            res.send(reservation)
        });

        table.save(function (err) {
            if (err) { res.send(err) };
        })
    });

    console.log(req.body);

};

exports.deleteReservation = function (req, res) {
    Models.Reservation.findOneAndRemove({_id: req.params.reservation_id})
        .exec(function(err, reservation) {
            if (err) {
                return res.send({msg: 'Cannot remove item'});
            }       
            if (!reservation) {
                return res.status(404).send({msg: 'Reservation not found'});
            }  
            res.send(reservation)
        })
};