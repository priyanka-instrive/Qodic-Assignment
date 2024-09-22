/* eslint-disable no-unused-vars */
const express = require("express");

const router = express.Router();
const { celebrate } = require("celebrate");
const controller = require("./controller");
const schema = require("./schema");
const { authenticate } = require("../../system/middleware/authentication");

router.post("/signup", celebrate(schema.createUser), controller.createUser);

router.post("/signin", controller.signin);

router.post("/get_token", controller.getRefreshToken);

//Private routes
router.get("/:id", authenticate, controller.getUser);

router.put(
    "/:id",
    authenticate,
    celebrate(schema.updateUser),
    controller.updateUser,
);

router.delete("/:id", authenticate, controller.deleteUser);

router.get("/", authenticate, controller.getAllUsers);

module.exports = router;
