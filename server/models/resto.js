const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

let RestoSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: function () { return new ObjectId() }},
    name: String,
    numOfTables: Number,
    tables: [{ type: Schema.Types.ObjectId, ref: 'Table'}]
});

exports.Resto = mongoose.model('Resto', RestoSchema);