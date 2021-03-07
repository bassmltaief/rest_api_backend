const express = require('express')
const { getAllUsers, addNewUser, updateUser, deleteUser } = require('./controllers/UserControllers')
const router = express.Router()

router.get('/users', getAllUsers)

router.post('/add_user', addNewUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id',deleteUser)

module.exports = router