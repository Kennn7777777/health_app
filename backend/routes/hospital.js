const router = require("express").Router();
const hospitalControllers = require("../controllers/hospitalControllers");

router.get("/", hospitalControllers.getHospitals);
router.post("/", hospitalControllers.createHospital);

module.exports = router;
