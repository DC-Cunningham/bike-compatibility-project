const router = require("express").Router();
const componentsController = require("../../controllers/componentsController");

// Matches with "/api/components"
router
  .route("/")
  .get(componentsController.findAll)
  .post(componentsController.create);

// Matches with "/api/components/:id"
router
  .route("/:id")
  .get(componentsController.findById)
  .put(componentsController.update)
  .delete(componentsController.remove);

module.exports = router;
