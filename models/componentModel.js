const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["Brakes", "Frame", "Fork", "Drivetrain", "Cockpit", "Wheel"],
    required: true,
  },
  pointsOfContact: [],
  influencers: [],
  description: String,
  date: { type: Date, default: Date.now },
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
