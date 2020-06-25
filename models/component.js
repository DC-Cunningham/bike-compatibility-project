const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["Frame", "Fork", "Drivetrain", "Cockpit"],
    required: true,
  },
  manufacturerSKU: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
