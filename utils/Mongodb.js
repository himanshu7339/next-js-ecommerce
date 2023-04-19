const mongoose = require("mongoose");

const mongoDbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Your mongodb connected sucessfully");
    })
    .catch((error) => {
      console.log(error);
    });
};


module.exports = mongoDbConnection;