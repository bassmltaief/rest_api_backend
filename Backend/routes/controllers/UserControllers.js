const User = require("../../Model/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        res.send(error)
    }
};

const addNewUser = async (req, res) => {
    const { name, lastName, email, phone } = req.body
    try {
        const newUser = new User({ name, lastName, email, phone })
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        res.send(error)
    }
};
const updateUser = async (req, res) => {
    const userID = req.params.id
    try {
        const userModified = await
            User.findByIdAndUpdate(userID, { ...req.body }, { new: true })
        res.send(userModified)
    } catch (error) {
        res.send(error)
    }
};

const deleteUser = async (req, res) => {
    const userID = req.params.id
    try {
        const userRemoved = await User.findByIdAndDelete(userID)
        res.send(userRemoved)
    } catch (error) {
        res.send(error)
    }
};


module.exports = { getAllUsers, addNewUser, updateUser, deleteUser }