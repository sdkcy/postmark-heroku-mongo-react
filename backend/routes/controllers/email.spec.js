/**
 * backend
 * email.spec.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const chai = require("chai");
const chaiHttp = require("chai-http");

const config = require("../../config/app.json");
const server = require("../../../app");
const {status} = require("../../constants");
const db = require("../../db");

const expect = chai.expect;

chai.use(chaiHttp);

describe("Email controller tests: ", () => {
    const apiPath = config.api + "/email/";
    const testEmail = {
        "From": config.postmarkapp.senderEmail,
        "To": "sidikacay@yahoo.com",
        "Subject": "Test subject",
        "TextBody": "This is a test text body."
    };

    const receivedEmail = {
        "FromFull": {
            "Email": config.postmarkapp.senderEmail
        },
        "OriginalRecipient": "sidikacay@yahoo.com",
        "Subject": "Test subject",
        "TextBody": "This is a test text body."
    };

    it("It should send an email and return it's id with response status 200", (done) => {
        chai.request(server)
            .post(apiPath + "send")
            .send(testEmail)
            .end((err, res) => {
                expect(res.status).to.equal(status.OK);
                const _id = res.body;
                expect(_id).to.be.a("string");
                done();
            });
    });

    it("It should receive an email and return it's id with response status 200", (done) => {
        chai.request(server)
            .post(apiPath + "receive?key=" + config.postmarkapp.webHookKey)
            .send(receivedEmail)
            .end((err, res) => {
                expect(res.status).to.equal(status.OK);
                const _id = res.body;
                expect(_id).to.be.a("string");
                done();
            });
    });

    it("It should get all sent email from database and return an array with response status 200", (done) => {
        chai.request(server)
            .get(apiPath + "getSentBox")
            .end((err, res) => {
                expect(res.status).to.equal(status.OK);
                const emails = res.body;
                expect(emails).to.be.an("array");
                expect(emails).to.deep.equal([testEmail]);
                done();
            });
    });

    it("It should get all inbox email from database and return an array with response status 200", (done) => {

        chai.request(server)
            .get(apiPath + "getInbox")
            .end((err, res) => {
                expect(res.status).to.equal(status.OK);
                const emails = res.body;
                expect(emails).to.be.an("array");
                expect(emails).to.deep.equal([testEmail]);
                done();
            });
    });

    after(() => {
        db.connection.db.dropDatabase();
    });
});
