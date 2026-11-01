const express = require('express');
const router = express.Router();
const balanceRecordController = require('../controllers/balanceRecordController');

router.get('/', balanceRecordController.getAllBalanceRecords);
router.post('/', balanceRecordController.createBalanceRecord);
router.put('/:id', balanceRecordController.updateBalanceRecord);
router.delete('/:id', balanceRecordController.deleteBalanceRecord);

module.exports = router;