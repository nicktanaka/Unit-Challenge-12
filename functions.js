/**
* Removes part of string between two sub strings
* @param {string} text The original string
* @param {string} start The starting string
* @param {string} end The ending string
* @return {string} The string in between
* @throws (Error} If start or end not found
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

/**
* Returns a CO code from a phone number: (###) ###-####
* @param   {string} phoneNum The phone number
* @returns {string} The CO code
* @throws {Error} If the format is incorrect
*/
function getCOCode(phoneNum) {
    var COCode;

    try {
        COcode = between(phoneNum, ")", "-");
    if (COcode.length == 4 && Number(COcode)) {
        return COcode;
    } else {
        throw new Error("Invalid CO code: " + COcode);
    }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
* Displays the CO code from an inputted phone number
* @param {string} inputId  The element id for the text box
* @param {string} outputId The element id of message div
*/
function displayCOCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var COCode = getCOCode(phoneNum);
        outputText = "Your CO code is " + COCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

/**
* Returns a line code from a phone number: (###) ###-####
* @param {string} phoneNum The phone number
* @param {string} The line code
* @throws {Error} If the format is correct
*/
function getLineCode(phoneNum) {
    var lineCode;

    try {
        lineCode = phoneNum.slice(10, 15);
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        } else {
            throw new Error("Invalid Line code: " + lineCode);
        }
        } catch (error) {
            throw new error("Invalid phone number: " + error.message);
        }
 }

/**
* Displays the line code from an inputted phone number
* @param {string} inputId  The element id for the text box
* @param {string} outputId The element id of message div
*/
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

