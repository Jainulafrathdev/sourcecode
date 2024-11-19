const mongoose = require('mongoose');

const connectDB = async () => {
    try {
<<<<<<< HEAD
        await mongoose.connect('mongodb://localhost:27017/profileDB', {
=======
        await mongoose.connect('mongodb://ec2-18-212-250-251.compute-1.amazonaws.com:27017/profileDB', {
>>>>>>> d89f8ef42a238e579f5f00e9b2207f6c5cf24707
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;

