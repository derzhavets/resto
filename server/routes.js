const express = require('express');
const router = express.Router();

const restosController = require('./controllers/restos.controller');
const reservationsController = require('./controllers/reservations.controller');

router.post('/create-resto', restosController.createResto);
router.get('/restos', restosController.getAllRestos);
router.get('/restos/:id', restosController.getResto);

router.get('/tables/:id', reservationsController.getTable);
router.post('/tables/:id/reserve', reservationsController.createReservation);
router.get('/reservations/:reservation_id/cancel', reservationsController.deleteReservation);
router.get('/reservations/date/:date', reservationsController.getReservationsByDate);

module.exports = router;