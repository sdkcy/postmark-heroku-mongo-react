/**
 * Backend
 * email.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const db = require("../index");

const emailSchema = db.Schema({
    "From": {type: String, required: true},
    "To": {type: String, required: true},
    "Subject": {type: String, required: true},
    "TextBody": {type: String, required: true},
    "date": {type: Date, default: Date.now}
});

module.exports = emailSchema;
