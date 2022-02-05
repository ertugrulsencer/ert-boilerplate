const { Router } = require("express");
const router = Router();
const Boot = require("../middlewares/Boot");
const main = require("./main.routes");

router.use("/", [Boot], main);

module.exports = router;
