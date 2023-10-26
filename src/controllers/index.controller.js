const indexCtrl = {};


indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderRegistrar = (req, res) => {
  res.render('registrar');
};

indexCtrl.renderListados = (req, res) => {
  res.render('listado');
};

indexCtrl.renderlistadeequipos = (req, res) => {
  res.render('listadeequipos');
};

indexCtrl.renderregistrarequipos = (req, res) => {
  res.render('registrarequipos');
};


module.exports = indexCtrl;