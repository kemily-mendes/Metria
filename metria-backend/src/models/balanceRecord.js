const db = require('../config/database');

exports.getAllBalanceRecords = function(callback) {
  db.query('SELECT * FROM balance_records', callback);
};

exports.createBalanceRecord = function(newRecord, callback) {
  db.query('INSERT INTO balance_records SET ?', newRecord, callback);
};

exports.updateBalanceRecord = function(id, updatedRecord, callback) {
  db.query('UPDATE balance_records SET ? WHERE id = ?', [updatedRecord, id], callback);
};

exports.deleteBalanceRecord = function(id, callback) {
  db.query('DELETE FROM balance_records WHERE id = ?', [id], callback);
};