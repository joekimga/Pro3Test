const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkingSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  synopsis: { type: String },
  date: { type: Date, default: Date.now },
  rating: { type: String },
  parkingType: { type: String},
  crossStreet: { type: String},
  price: { type: String },
  lighting: { type: String },
  businessHours: { type: String },
  eventPricing: { type: String },
  safety: {type: String },
  zipCode: { type: String },


});

const Parking = mongoose.model("Parking", parkingSchema);

module.exports = Parking;


////// other Parameters we may need for Park Whiz
const parkingSchema = new Schema({
  destination: { type: String, required: true },
  lat: { type: Float: required: true },
  lng: { type: Float: required: true },
  synopsis: { type: String },
  sort: { type: String },
  rating: { type: String },
  price: { Float: String },
  safety: {type: String },
  zipCode: { Integer: String },


});