const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db COnnect ${conn.connection.host}`);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit();
  }
};

module.exports = connectdb;
