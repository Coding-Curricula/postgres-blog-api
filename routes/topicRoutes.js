const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicControllers');

// get all topics
router.get('/', topicController.getAllTopics);

// get a topic by id
router.get('/:id', topicController.getTopicById);

// create a new topic
router.post('/', topicController.createTopic);

// update a topic by id
router.put('/:id', topicController.updateTopicById);

// delete a topic by id
router.delete('/:id', topicController.deleteTopicById);

exports.modules = router;