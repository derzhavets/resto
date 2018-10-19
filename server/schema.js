const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let RestoSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    name: String,
    numOfTables: Number,
    tables: [{ type: Schema.Types.ObjectId, ref: 'Table'}]
});

let TableSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    number: Number,
    resto: { type: Schema.Types.ObjectId, ref: 'Resto' },
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation'}]
});

let ReservationSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    name: String,
    guests: Number,
    date: Date,
    table: { type: Schema.Types.ObjectId, ref: 'Table'}
});

ReservationSchema.pre('remove', function(next) {
    // TODO Delete reservation from its table references
})

let Resto = mongoose.model('Resto', RestoSchema);
let Table = mongoose.model('Table', TableSchema);
let Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = {
    Resto,
    Table,
    Reservation
};