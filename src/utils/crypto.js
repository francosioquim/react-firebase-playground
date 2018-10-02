import CryptoJS from 'crypto-js'

export const getSecret = () => {
    return process.env.REACT_APP_SECRET
}

export const encrypt = (key) => {
    const encryptedKey = CryptoJS.AES.encrypt(key, getSecret())
    return String(encryptedKey)
}

export const decrypt = (key) => {
    const decryptedKey = CryptoJS.AES.decrypt(key, getSecret())
    return decryptedKey.toString(CryptoJS.enc.Utf8)
}
