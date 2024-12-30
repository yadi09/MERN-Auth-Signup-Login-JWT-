const mongoose = require('mongoose'); // Import mongoose

module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.set('debug', true);

    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to the database. \n', error);
    }
};
