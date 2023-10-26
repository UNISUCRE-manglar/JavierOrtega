const express = require("express");
const router = express.Router();


const {

    guardarEquipos,
    registrarEquipos,
    listarEquipos


}= require("../controllers/equipos.controles");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

router.post("/guardarEquipos",isAuthenticated, guardarEquipos );
router.get("/registrarEquipos",  registrarEquipos);
router.get("/listarEquipos",  listarEquipos);

module.exports = router;