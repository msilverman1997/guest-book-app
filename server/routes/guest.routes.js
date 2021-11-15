const express = require('express');

const router = express.Router();

const guests = require('../controller/guest.controller.js');

router.post("/guests", guests.create);
router.get("/guests", guests.findAll);
router.delete("/guests/:id", guests.delete);

module.exports = router;