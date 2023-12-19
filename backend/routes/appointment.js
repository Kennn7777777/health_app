const router = require("express").Router();
const apptControllers = require("../controllers/apptControllers");

router.post("/new", apptControllers.newAppt);
router.get("/:id", apptControllers.getApptByUser);

module.exports = router;
