const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    newThought,
    editThought,
    deleteThought,
    createReaction,
    deleteReaction, 
} = require('../../controllers/thoughtController');

router.route('/api/thoughts').get(getAllThoughts).get(getSingleThought).post(newThought).put(editThought).delete(deleteThought)

router.route('/api/thoughts/:thoughtId/reactions').post(createReaction).delete(deleteReaction)


module.exports = router;
