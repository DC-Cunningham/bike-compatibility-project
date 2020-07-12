const router = require("express").Router();
const componentController = require("../../controllers/componentsController");

// Matches with "/api/users"
router
  .route("/")
  .get(componentController.findAll)
  .post(componentController.create);

router
  .route("/:id")
  .get(componentController.findById)
  .put(componentController.update)
  .delete(componentController.remove);

module.exports = router;
