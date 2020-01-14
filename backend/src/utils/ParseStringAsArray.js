module.exports = function parseArrayAsString(arrayAsString) {
    const array = arrayAsString.split(",").map(tech => tech.trim());

    return array;
}