/**
 * Backend
 * index.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const express = require("express");
const router = express.Router();
const {api} = require("../config/app");

router.use(api + "/email", require("./controllers/email"));

module.exports = router;
