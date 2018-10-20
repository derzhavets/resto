const tableModel = require('../models/table');
const reservationModel = require('../models/reservation');

const Table = tableModel.Table;
const Reservation = reservationModel.Reservation;

exports.getTable = function (req, res) {
    Table.findById(req.params.id)
        .populate('reservations')
        .exec(function (err, table) {
            res.send(err ? err : table)
        })
}

exports.createReservation = function (req, res) {

    let table = Table.findById(req.params.id, function (err, table) {
        let reservation = new Reservation({
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
}

exports.deleteReservation = function (req, res) {
    Reservation.findOneAndRemove({ _id: req.params.reservation_id })
        .exec(function (err, reservation) {
            res.send(err ? err : reservation)
        })
}