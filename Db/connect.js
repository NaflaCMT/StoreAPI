const mongoose = require("mongoose");

const connectDB = (connection_string) => {
  mongoose.connect(connection_string);
};
module.exports = connectDB;