const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  date: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  const hashPassword = await bcrypt.hash(this.password, 10);
  this.password = hashPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
