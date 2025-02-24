const express = require("express");
const { addUser , getUserViews , getUserTopRecipe} = require("../controllers/userController");
const router = express.Router();
router.post("/add-user",addUser);
router.get("/user/:userId/views",getUserViews);
router.get("/user/:userId/highestviews",getUserTopRecipe);

module.exports = router;