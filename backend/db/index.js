/**
 * Backend
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const mongoose = require("mongoose");
const {database} = require("../config/app");

const dbName = database.name[process.env.mode];
mongoose.connect(database.path[process.env.mode] + dbName, database.options);

module.exports = mongoose;

