const mongoose = require('mongoose');
const dbConfig = require('./dbconfig');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(dbConfig.database, {
            useNewUrlParser: true,
            userUnifiedTopology: true,
            userFindAndModify: false
        })
        console.log(`MongoDB Conected: ${conn.connection.host}`)
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB