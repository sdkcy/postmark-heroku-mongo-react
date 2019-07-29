/**
 * Backend
 * helpers.js
 * Created by Sıdıka ÇAY on 2019-07-02
 */

/***
 * Generates a DTO(Data Transfer Object) from given object with pattern
 * @param {Object} object
 * @param {Array} objectPattern
 * @returns {Object} DTO
 */
exports.objectToDTO = function (object, objectPattern) {
    const dto = {};
    objectPattern.map((key) => {
        dto[key] = object[key];
    });

    return dto;
};
