
const mongoose = require("mongoose");

exports.connectDatabase = async () => {
   await mongoose.connect("mongodb+srv://sushitkarki_db_user:%40sushit%401@cluster0.iata84x.mongodb.net/?appName=Cluster0").then(() => {
      console.log("Database Connected Successfully")
   }).catch((error) => {
      console.log("Database Connection Failed")
      console.log(error)
   });
}