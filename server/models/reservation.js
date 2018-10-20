const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let ReservationSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    name: String,
    guests: Number,
    date: Date,
    table: { type: Schema.Types.ObjectId, ref: 'Table'}
});

ReservationSchema.pre('remove', function(next) {
    // TODO Delete reservation from related table references
})

exports.Reservation = mongoose.model('Reservation', ReservationSchema);