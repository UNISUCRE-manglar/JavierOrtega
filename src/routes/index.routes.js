const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderRegistrar, renderListados, rendereditarsensor, renderlistadeequipos, renderregistrarequipos, } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/registrar", renderRegistrar);
router.get("/listados", renderListados);
router.get("/listadeequipos", renderlistadeequipos);
router.get("/registrarequipos", renderregistrarequipos);

module.exports = router;
