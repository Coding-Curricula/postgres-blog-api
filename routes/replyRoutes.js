const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyControllers');

// get all replies
router.get('/', replyController.getAllReplies);

// get a reply by id
router.get('/:id', replyController.getReplyById);

// create a new reply
router.post('/', replyController.createReply);

// update a reply by id
router.put('/:id', replyController.updateReplyById);

// delete a reply by id
router.delete('/:id', replyController.deleteReplyById);

exports.modules = router;