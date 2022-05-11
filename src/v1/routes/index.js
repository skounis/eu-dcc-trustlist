const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controller");

router.get("/", controller.getAll);
router.get("/acc/", controller.getAllAcc);

router.get("/:kid", controller.getOne);

module.exports = router;