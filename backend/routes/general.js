const router = require("express").Router();
const generalControllers = require("../controllers/generalControllers");

router.post("/login", generalControllers.login);
router.post("/register", generalControllers.register);

module.exports = router;
