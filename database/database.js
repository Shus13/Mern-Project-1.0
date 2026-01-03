
const mongoose = require("mongoose");

exports.connectDatabase = async () => {
   await mongoose.connect("mongodb+srv://sushitkarki_db_user:%40sushit%401@cluster0.iata84x.mongodb.net/?appName=Cluster0")
   console.log("Database Connected Successfully")
}