const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from environment variables
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Ensures the new URL parser is used
            useUnifiedTopology: true, // Ensures the use of the new server discovery and monitoring engine
            // If you're using a recent version of Mongoose, these options are typically default
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with a failure code if connection fails
    }
};

module.exports = connectDB;
