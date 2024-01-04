const router = require("express").Router();
const apptControllers = require("../controllers/apptControllers");

router.post("/new", apptControllers.newAppt);
router.get("/:id", apptControllers.getApptByUser);
router.put("/:id", apptControllers.updateAppt);
router.delete("/delete", apptControllers.deleteApptById);

module.exports = router;
