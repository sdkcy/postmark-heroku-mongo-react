/**
 * Backend
 * email.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const express = require("express");
const router = express.Router();
const postmark = require("postmark");
const sentEmail = require("../../db/models/email")("SentBox");
const receivedEmail = require("../../db/models/email")("Inbox");
const {status} = require("../../constants/index");
const config = require("../../config/app.json");
const Cache = require("../../cache/index");

const postmarkClient = new postmark.ServerClient(config.postmarkapp.key);
const emailCache = new Cache(config.cache.ttl);

router.post("/send", (req, res) => {
    const email = req.body;

    return postmarkClient.sendEmail(email)
        .then(() => {
            return sentEmail.save(email)
                .then((id) => {
                    emailCache.delete("SentBox");

                    return res.status(status.OK).send(id);
                });
        })
        .catch((err) => {
            console.log("err", err);
            return res.sendStatus(status.BAD_REQUEST);
        });
});

router.post("/receive", (req, res) => {
    const key = req.query.key;
    if (key !== config.postmarkapp.webHookKey) {
        return res.sendStatus(status.UNAUTHORIZED);
    }

    const email = req.body;

    const newEmail = {
        From: email.FromFull.Email,
        To: email.OriginalRecipient,
        Subject: email.Subject,
        TextBody: email.TextBody
    };

    return receivedEmail.save(newEmail)
        .then((id) => {
            emailCache.delete("Inbox");

            return res.status(status.OK).send(id);
        })
        .catch((err) => {
            console.log("err", err);
            return res.sendStatus(status.BAD_REQUEST);
        });
});

router.get("/getSentBox", (req, res) => {
    const sentBox = emailCache.get("SentBox", sentEmail.getAllEmail);

    return sentBox.then((allEmail) => {
        return res.status(status.OK).send(allEmail);
    }).catch(() => {
        return res.sendStatus(status.BAD_REQUEST);
    });
});

router.get("/getInbox", (req, res) => {
    const inbox = emailCache.get("Inbox", receivedEmail.getAllEmail);

    return inbox.then((allEmail) => {
        return res.status(status.OK).send(allEmail);
    }).catch(() => {
        return res.sendStatus(status.BAD_REQUEST);
    });
});


module.exports = router;
