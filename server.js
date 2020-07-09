const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const User = require("./models/userModel");
const { json } = require("express");
const JWT_SECRET = "HJLVBG&&#BJFUY&#NBFKI";

// Defining middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect("mongodb://localhost/bikeComponentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const authMiddleWare = async (req, res, done) => {
    console.log(req.headers.authorization);
    const bearerToken = req.headers.authorization;
    if (!bearerToken) return done(true, null);
    const token = bearerToken.split(" ");

    const { userId } = jsonwebtoken.verify(token[1], JWT_SECRET);
    const user = await User.findOne({ _id: userId });
    if (!user) return done(true, null);
    req.user = user;
    return done(null, user);
  };

  // Serve up static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view

  app.post("/api/login", async (req, res) => {
    console.log("Login");

    const {
      body: { password, email },
    } = req;
    if (!email || !password) {
      console.log("invalid user or password");
      return res.status(404).send("Invalid email or password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).send("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log("Invalid password");
      return res.status(404).send("Invalid email or password");
    }

    const token = jsonwebtoken.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 3,
    });

    return res.json({
      data: {
        token,
        user,
      },
    });
  });

  app.post("/api/logout", (req, res) => {
    return res.json({ data: "success" });
  });

  app.post("/api/signup", async (req, res) => {
    const {
      body: { email, password },
    } = req;
    if (!email || !password)
      return res.status(404).send("Invalid details. Please check again");

    const user = await User.findOne({ email });
    if (user) return res.status(404).send("Email already taken");

    const newUser = await User.create({ email, password });

    const token = jsonwebtoken.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 3,
    });

    return res.json({
      data: {
        token,
        user: newUser,
      },
    });
  });

  app.get("/api/me", authMiddleWare, (req, res) => {
    console.log(req.user);
    return res.json({ data: "you got mail" });
  });

  app.use(routes);

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}

main();
