const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async() => {

    try {
        const DB_NAME = 'StudyNotion'
        //console.log(process.env.)
        const dbConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("Mongodb is connected on ", dbConnectionInstance.connection.host)
    } catch (error) {
        console.error("Error while connecting to database")
        process.exit(1);
    }
};