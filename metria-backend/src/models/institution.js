const db = require('../config/database');

exports.getAllInstitutions = function(callback) {
  db.query('SELECT * FROM institutions', callback);
};

exports.getInstitutionById = function(id, callback) {
  db.query('SELECT * FROM institutions WHERE id = ?', [id], callback);
};