const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipesController = require("../controllers/recipes");
const { ensureAuth } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, recipesController.getRecipe);

//Enables user to create posts w/cloudinary for uploads
router.post("/createRecipe", upload.single("file"), recipesController.createRecipe);

//Enables user to like posts - in controller uses Post model
router.put("/likeRecipe/:id", recipesController.likeRecipe);

//Enables user to delete post - in controller uses Post model to delete post from Mongo Db
router.delete("/deleteRecipe/:id", recipesController.deleteRecipe);

module.exports = router;
