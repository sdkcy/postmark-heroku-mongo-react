/**
 * Backend
 * helpers.spec.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */
const {expect} = require("chai");
const {objectToDTO} = require("./helpers");

describe("Helper functions test:", function () {
    const objectPattern = [
        "id",
        "name",
        "email",
    ];

    it("It should return a DTO object according to given pattern", function (done) {
        const userObject = {
            "id": "testId",
            "name": "x",
            "gender": "male",
            "email": "test@test.com",
            "phone": "+906123432256",
            "address": [
                {
                    "number": 7,
                    "street": "Ataturk bulvarı",
                    "city": "İzmir",
                    "zipcode": "35000"
                }
            ]
        };

        const expectedUserObject = {
            "id": "testId",
            "name": "x",
            "email": "test@test.com",
        };

        const userDTO = objectToDTO(userObject, objectPattern);

        expect(expectedUserObject).to.deep.equal(userDTO);
        done();
    });
});
 
