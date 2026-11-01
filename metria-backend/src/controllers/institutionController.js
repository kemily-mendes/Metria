const Institution = require('../models/institution');

exports.getAllInstitutions = function(req, res) {
  Institution.getAllInstitutions((err, institutions) => {
    if (err) throw err;
    res.json(institutions);
  });
};

exports.getInstitutionById = function(req, res) {
  Institution.getInstitutionById(req.params.id, (err, institution) => {
    if (err) throw err;
    res.json(institution);
  });
};