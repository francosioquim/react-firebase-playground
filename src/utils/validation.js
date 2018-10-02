export function required(value) {
    return !value
}

export function validName(value) {
    return value && /^[A-Za-z ]+$/i.test(value)
}

export function validPhone(value) {
    return (
        value &&
        /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/.test(
            value
        )
    ) // eslint-disable-line max-len
}

export function validUUID(value) {
    return value && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value) // eslint-disable-line max-len
}

export function validEmail(value) {
    return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
}

export function validUrl(value) {
    return (
        value && /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/i.test(value)
    )
}

export function validMoney(value) {
    return value && !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/i.test(value)
}

export function validNumber(value) {
    return value && !/^([0-9]+)$/i.test(value)
}

export function numberRange(min, max, value) {
    const v = parseInt(value, 10)
    return v >= min && v <= max
}

export function ipAddress(value) {
    return (
        value &&
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            value
        )
    ) // eslint-disable-line max-len
}

export function samePassword(value1, value2) {
    return value1 === value2
}

export function withinMinLength(length, value) {
    return !(value.length < length)
}

export function withinMaxLength(length, value) {
    return !(value.length > length)
}

export function exactLength(length, value) {
    return value.length !== length
}

export function lengthInRange(min, max, value) {
    return value.length >= min && value.length <= max
}
