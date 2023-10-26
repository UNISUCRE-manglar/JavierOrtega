const principalCtrl = {};


// Models
const Sensores = require('../models/sensor');


principalCtrl.registrarSensor= (req, res) => {
  res.render('registrar');
};


principalCtrl.listarSensores = async (req, res) => {
  const listarsensores = await Sensores.find();
  console.log(listarsensores);
  res.render('listado', {listarsensores});
};

principalCtrl.guardarSensor = async (req, res) => { 
  const { nombre, ubicacion, tipo, latitud, longitud, valor, codigo } = req.body
  const errors = [];
  if (!nombre) {
    errors.push({ text: "Por favor indique Nombre del sensor" });
  }
  if (!ubicacion) {
    errors.push({ text: "Por favor indique la ubicacion" });
  }
  if (!tipo) {
    errors.push({ text: "Por favor indique tipo producto" });
  }
  if (!latitud) {
    errors.push({ text: "Por favor indique la latitud" });
  }
  if (!longitud) {
    errors.push({ text: "Por favor indique la longitud" });
  }
  if (!valor) {
    errors.push({ text: "Por favor indique el valor" });
  }
  if (!codigo) {
    errors.push({ text: "Por favor indique el codigo" });
  }
  if (errors.length > 0) {
    res.render("registrar", {
        errors,
        nombre,
        ubicacion,
        tipo,
        latitud,
        longitud,
        valor,
        codigo,
    });
  } else {
    const newSensor = new Sensores({
      nombre,
      ubicacion,
      tipo,
      latitud,
      longitud,
      valor,
      codigo,
    });
    newSensor.user = req.user.id;
    await newSensor.save();
    req.flash("success_msg", "Producto adicionado correctamente");
    res.redirect("/mostarsensores");
  }
  
}



module.exports = principalCtrl;