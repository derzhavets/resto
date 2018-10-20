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
        table.save().exec();
    }

    resto.save(function (err) {
        if (err) { return res.send(err) };
        Models.Resto.findById(resto._id, function (err, data) {
            res.send(data);
        })
    })
};

exports.getAllRestos = function (req, res) {
    Models.Resto.find(function (err, restos) {
        res.send(err ? err : restos)
    })
};

exports.getResto = function (req, res) {
    Models.Resto.findById(req.params.id)
        .populate({
            path: 'tables',
            populate: { path: 'reservations' }
        })
        .exec(function (err, data) {
            res.send(err ? err : data)
        })
};

exports.getTable = function(req, res) {
    Models.Table.findById(req.params.id)
    .populate('reservations')
    .exec(function(err, table) {
        res.send(err ? err : table)
    })
}

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
            table.save((function (err) {
                res.send(err ? err : reservation)
            }));
        });
    });
};

exports.deleteReservation = function (req, res) {
    Models.Reservation.findOneAndRemove({ _id: req.params.reservation_id })
        .exec(function (err, reservation) {
            if (err) {
                return res.send({ msg: 'Cannot remove item' });
            } else {
                res.send(reservation)
            }
        })
};