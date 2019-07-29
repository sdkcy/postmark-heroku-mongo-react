/**
 * backend
 * email.spec.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const chai = require("chai");
const expect = chai.expect;

const {objectToDTO} = require("../../utils/helpers");
const {emailPattern} = require("../../constants/index");
const {save, getAllEmail} = require("./email")("Inbox");
const db = require("../index");

const testEmail = {
    "From": "test.sender@test.com",
    "To": "test.receiver@test.com",
    "Subject": "test subject",
    "TextBody": "test body"
};

describe("Email model test:", () => {

    it("It should return id. If the process is not success, it returns null", (done) => {
        save(testEmail).then((id) => {
            expect(id).to.be.not.equal(null);
        }).catch((error) => {
            console.error(error.message);
        }).finally(() => {
            done();
        });
    });

    it("It should return all email as an array.", (done) => {
        getAllEmail().then((emails) => {
            expect(emails).to.be.an("array");
            const real = emails.map((email) => {
                return objectToDTO(email, emailPattern);
            });
            expect(real).to.deep.equal([testEmail]);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            done();
        });
    });

    after(() => {
        db.connection.db.dropDatabase();
    });
});
