const BalanceRecord = require('../models/balanceRecord');

exports.getAllBalanceRecords = function(res) {
  BalanceRecord.getAllBalanceRecords((err, records) => {
    if (err) throw err;
    res.json(records);
  });
};

exports.createBalanceRecord = function(req, res) {
  const newRecord = {
    institution_id: req.body.institution_id,
    net_balance: req.body.net_balance,
    entry_date: req.body.entry_date,
    balance_source: req.body.balance_source,
    created_at: new Date()
  };

  BalanceRecord.createBalanceRecord(newRecord, (err) => {
    if (err) throw err;
    res.json({ message: 'Registro de saldo criado com sucesso!' });
  });
};

exports.updateBalanceRecord = function(req, res) {
  const updatedRecord = {
    net_balance: req.body.net_balance,
    entry_date: req.body.entry_date,
    balance_source: req.body.balance_source
  };

  BalanceRecord.updateBalanceRecord(req.params.id, updatedRecord, (err) => {
    if (err) throw err;
    res.json({ message: 'Registro de saldo atualizado com sucesso!' });
  });
};

exports.deleteBalanceRecord = function(req, res) {
  BalanceRecord.deleteBalanceRecord(req.params.id, (err) => {
    if (err) throw err;
    res.json({ message: 'Registro de saldo deletado com sucesso!' });
  });
};