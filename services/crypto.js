'use strict';

import * as crypto from 'crypto'

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
let genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
let sha512 = function(string, salt){
    try {
        let hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        hash.update(string);
        let value = hash.digest('hex');
        return {
            salt:salt,
            passwordHash:value
        };
        
    } catch (error) {
        throw error;
    }
};

/**
 * Retrun a salted sha512 encrypted password 
 * @param {String} userpassword taken from the request body 
 */
export async function saltHashPassword(userpassword) {
    try {
        let salt = genRandomString(16); /** Gives us salt of length 8 */
        let passwordData = sha512(userpassword, salt);
        return {
            password:passwordData.passwordHash,
            salt:passwordData.salt
        }

    } catch (error) {
        throw error;
    }
}

export async function compare(password , user){
    try {
        let encrypt = sha512(password,user.usuario_chave);
        return user.usuario_senha == encrypt.passwordHash;
    } catch (error) {
        error.type = 'encrypt';
        error.message = 'Encryption not sucessfull';
        throw error;
    }
}