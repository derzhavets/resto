const restoModel = require('../models/resto');
const Resto = restoModel.Resto;

exports.createResto = function (req, res) {

    let resto = new Resto({
        name: req.body.name,
        numOfTables: req.body.numOfTables
    });

    for (let i = 0; i < req.body.numOfTables; i++) {
        let table = new Table({
            number: i + 1,
            resto: resto._id
        });
        resto.tables.push(table);
        table.save();
    }

    resto.save(function (err) {
        Resto.findById(resto._id, function (err, data) {
            res.send(err ? err : data)
        })
    })
}

exports.getAllRestos = function (req, res) {
    Resto.find(function (err, restos) {
        res.send(err ? err : restos)
    })
}

exports.getResto = function (req, res) {
    Resto.findById(req.params.id)
        .populate({
            path: 'tables',
            populate: { path: 'reservations' }
        })
        .exec(function (err, data) {
            res.send(err ? err : data)
        })
}