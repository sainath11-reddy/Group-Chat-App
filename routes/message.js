const express = require('express');
const router = express.Router();
const message = require('../controllers/message');
const auth = require('../middleware/auth');
router.get('/',auth.authenticate,message.getMessages);
router.post('/', auth.authenticate, message.postMessage);
module.exports = router;
