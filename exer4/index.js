import * as fs from "fs";
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');

function generateUniqueID(firstName, lastName) {
    const uniqueString = uuidv4().replace(/-/g, '').substring(0, 8);
    const lowerFirstName = firstName.toLowerCase();
    const lowerLastName = lastName.toLowerCase();
    const uniqueID = lowerFirstName[0] + lowerLastName + uniqueString;

    return uniqueID
}

function addAccount(userInfo) {
    const [firstName, lastName, email, age] = userInfo;

    if (
        userInfo.length === 4 &&
        firstName && lastName && email &&
        validator.isEmail(email) &&
        validator.isInt(age.toString(), { min: 18 })
    ) {
        const uniqueID = generateUniqueID(firstName, lastName);
        const userData = userInfo;

        try {
            fs.appendFileSync('users.txt', userData);
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    return false;
}

module.exports = { generateUniqueID, addAccount };
