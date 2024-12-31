const validator = require("validator")

exports.checkempty = (fields) => {
    console.log("------", fields);

    const error = {}
    let isError = false
    for (const key in fields) {
        console.log(fields[key]);

        if (validator.isEmpty(fields[key] ? "" + fields[key] : "")) {
            error[key] = `${key} is Required`
            isError = true
        }
    }
    // for (const key in object) {
    //     if (Object.prototype.hasOwnProperty.call(object, key)) {
    //         const element = object[key];

    //     }
    // }
    return { isError, error }
}
