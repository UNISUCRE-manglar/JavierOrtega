const express = require("express");
const router = express.Router();


const {

    guardarSensor,
    registrarSensor,
    listarSensores


}= require("../controllers/principal.controles");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/guardarsensor",isAuthenticated, guardarSensor );
router.get("/registarsensor", registrarSensor);
router.get("/mostarsensores", listarSensores);

module.exports = router;