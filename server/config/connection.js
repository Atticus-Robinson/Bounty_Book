const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "ongodb://localhost:27017/bounty-book",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
