const equiposCtrl = {};


// Models
const Equipos = require('../models/equipos');


equiposCtrl.registrarEquipos= (req, res) => {
  res.render('registrarequipos');
};


equiposCtrl.listarEquipos = async (req, res) => {
  const listarequipos = await Equipos.find();
  console.log(listarequipos);
  res.render('listadeequipos', {listarequipos});
};

equiposCtrl.guardarEquipos = async (req, res) => { 
  const { equipo, liga, numerosdeestrellas, goles } = req.body
  const errors = [];
  if (!equipo) {
    errors.push({ text: "Por favor indique Nombre del equipo" });
  }
  if (!liga) {
    errors.push({ text: "Por favor indique la liga" });
  }
  if (!numerosdeestrellas) {
    errors.push({ text: "Por favor indique tipo numeros de estrellas" });
  }
  if (!goles) {
    errors.push({ text: "Por favor indique los goles" });
  }
 
  if (errors.length > 0) {
    res.render("registrarequipos", {
        errors,
        equipo,
        liga,
        numerosdeestrellas,
        goles,
    });
  } else {
    const newEquipos = new Equipos({
        equipo,
        liga,
        numerosdeestrellas,
        goles,
    });
    newEquipos.user = req.user.id;
    await newEquipos.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/listarEquipos");
  }
  
}



module.exports = equiposCtrl;