const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn =  await mongoose.connect(process.env.MONGO_URI)

        console.log(conn.connection.host.cyan.underline)

    } catch (error) {
        console.log('mongo error'.red.underline, error);

        // standard practice to exit a certain process.
        // 1 indicates some error. 0 is for no error.
        process.exit(1)
    }
}

module.exports = connectDb