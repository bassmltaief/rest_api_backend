const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log("the DB is connected .....")
    } catch (error) {
        console.error(error)
    }
};


module.exports = connectDB

/* mongoose.connect('mongodb://127.0.0.1:27017/contactlist',
{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then((res)=>console.log(" the DB is connected .....  ")).catch((err)=>console.error(err)) ; */
