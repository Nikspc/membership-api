const express = require('express');
const router = express.Router();
const memberController = require('../controllers/member.controller');

router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getMemberById);

module.exports = router;
