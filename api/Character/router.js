const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { authenticate } = require("../../system/middleware/authentication");

router.get("/people", authenticate, controller.getAllPeople);

router.get("/people/:id", authenticate, controller.getPersonById);

router.get("/search", authenticate, controller.searchCharacters);
module.exports = router;
