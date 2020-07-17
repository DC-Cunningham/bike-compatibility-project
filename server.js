const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const { User, Component } = require("./models");
const { json } = require("express");
const JWT_SECRET = "HJLVBG&&#BJFUY&#NBFKI";

// Defining middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set("useFindAndModify", false);
app.use(cors());

async function main() {
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bikeComponentDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const authMiddleWare = async (req, res, done) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) return done(true, null);
    const token = bearerToken.split(" ");

    const { userId } = jsonwebtoken.verify(token[1], JWT_SECRET);
    const user = await User.findOne({ _id: userId });
    if (!user) return done(true, null);
    res.user = user;
    return done(null, user);
  };

  // Serve up static assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view

  app.post("/api/login", async (req, res) => {
    const {
      body: { password, email },
    } = req;
    if (!email || !password) {
      console.log("invalid user or password");
      return res.send(401, { message: "invalid user or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.send(401, { message: "invalid user or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log("Invalid password");
      return res.send(401, { message: "invalid user or password" });
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
      body: { name, email, password },
    } = req;
    if (!email || !password)
      return res.status(401).send("Invalid details. Please check again");

    const user = await User.findOne({ email });
    if (user) return res.status(409).send("Email already exists");

    const newUser = await User.create({ name, email, password });

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
    return res.json(res.user);
  });

  app.get("/api/components", async (req, res) => {
    const components = await Component.find();
    return res.json(components);
  });

  app.post("/api/components", async (req, res) => {
    const {
      body: { name, type, definition, wikiLink },
    } = req;
    if (!name || !type)
      return res.send(401, {
        message: "Component name and type are both required",
      });
    const component = await Component.findOne({ name });
    if (component)
      return res.send(409, { message: "Component already exists" });

    const newComponent = await Component.create({
      name,
      type,
      definition,
      wikiLink,
    });

    return res.json({
      data: {
        component: newComponent,
      },
    });
  });

  app.put("/api/components", async (req, res) => {
    if (!req.body.name || !req.body.type)
      return res.send(401, {
        message: "Component name and type are both required",
      });

    const updateComponent = await Component.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    return res.json({
      data: {
        component: updateComponent,
      },
    });
  });

  app.use(routes);

  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
}

main();
