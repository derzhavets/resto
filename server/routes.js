const express = require('express');
const router = express.Router();

const controller = require('./controller');


router.post('/create-resto', controller.createResto);

router.get('/restos', controller.getAllRestos);
router.get('/restos/:id', controller.getResto);

router.get('/tables/:id', controller.getTable);
router.post('/tables/:id/reserve', controller.createReservation);
router.get('/reservations/:reservation_id/cancel', controller.deleteReservation);

module.exports = router;