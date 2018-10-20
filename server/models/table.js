const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let TableSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    number: Number,
    resto: { type: Schema.Types.ObjectId, ref: 'Resto' },
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation'}]
});

exports.Table = mongoose.model('Table', TableSchema);
