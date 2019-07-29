/**
 * backend
 * email.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

const emailSchema = require("../schemas/email");
const db = require("../index");
const {objectToDTO} = require("../../utils/helpers");
const {emailPattern} = require("../../constants");

function createModel(type) {
    const Email = db.model(type, emailSchema);

    /***
     * Save email to database
     * @param {Object} email
     * @returns {Object} id
     */
    const save = function (email) {
        const newEmail = new Email(email);
        return newEmail.save()
            .then((savedEmail) => {
                return savedEmail._id;
            })
            .catch(() => {
                return null;
            });
    };

    /***
     * Get sent/received emails from database
     * @returns {Array} all received emails
     */
    const getAllEmail = function () {
        return Email.find().sort({date: "desc"}).then((emails) => {
            return emails.map((email) => objectToDTO(email, emailPattern));
        });
    };

    return {save, getAllEmail};
}

module.exports = createModel;
