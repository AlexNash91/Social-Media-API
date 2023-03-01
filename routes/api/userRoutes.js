const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    
} = require('../../controllers/userController');

router.route('/api/users').get(getAllUsers).get(getSingleUser).post(newUser).put(updateUser).delete(deleteUser)

router.route('/api/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router;
