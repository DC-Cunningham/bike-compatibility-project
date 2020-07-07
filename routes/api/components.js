const router = require("express").Router();
const componentsController = require("../../controllers/componentsController");

// Matches with "/api/components"
router
  .route("/")
  .get(componentsController.findAll)
  .post(componentsController.create);

module.exports = router;
