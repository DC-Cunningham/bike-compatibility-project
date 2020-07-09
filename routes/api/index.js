const router = require("express").Router();
const componentRoutes = require("./componentRoutes");
const userRoutes = require("./userRoutes");

// component routes
router.use("/components", componentRoutes);
router.use("/users", userRoutes);

module.exports = router;
