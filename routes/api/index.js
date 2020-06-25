const router = require("express").Router();
const componentRoutes = require("./components");

// component routes
router.use("/components", componentRoutes);

module.exports = router;
