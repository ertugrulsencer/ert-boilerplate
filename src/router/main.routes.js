const { Router } = require("express");
const router = Router();
const ctrl = {
  home: require("../controllers/Home"),
  about: require("../controllers/About"),
};

router.get("/", ctrl.home.get);
router.get("/about", ctrl.about.get);

module.exports = router;
