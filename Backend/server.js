const express = require('express');
const connectDB = require('./config/connectDB');
const UserRouter = require('./routes/UserRouter'); 
const app = express();
app.use(express.json());
app.use('/api', UserRouter);


// 4 create the sechma
const User = require('./Model/User')


// 3 set up the env variables
require('dotenv').config({ path: './config/.env' })


// 2 connect the DATABASE 
connectDB()

/****************************** CRUD  ****************************/
// app.get('./api/users', (req, res) => {
//     User.find().then(users => res.send(users))
//         .catch((err) => res.status(404).json({ msg: "users not found" }));
// });

// app.get('/api/users/:id', (req, res) => {
//     const userID = req.params.id
//     User.findById(userID).then(user => res.send(user))
//         .catch(err => res.send(err));
// })

// app.post('/api/add_user', (req, res) => {
//     const { name, lastName, email, phone } = req.body;
//     const newUser = new User({ name, lastName, email, phone });
//     newUser.save()
//         .then((newUser) => res.send(newUser))
//         .catch((err) => res.send(err));
// })

// app.put('/api/users/:id', (req, res) => {
//     const userID = req.params.id
//     User.findByIdAndUpdate(userID, { ...req.body }, { new: true })
//         .then(userModified => res.send(userModified))
//         .catch((err) => res.send(err));
// })

// app.delete('/api/users/:id', (req, res) => {
//     const userID = req.params.id
//     user.findByIdAndDelete(userID)
//         .then(userRemoved => res.send(userRemoved))
//         .catch((err) => res.send(err))
// })


//1 start the  server
const PORT = process.env.PORT;
app.listen(PORT, err => err ? console.error(err)
    : console.log(`the server is runnig on port ${PORT}`));