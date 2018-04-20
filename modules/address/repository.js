import Address from '../../models/address';

/**
 * Function to create addresses
 * @param { Object } address request body from context
 * @returns addresses inserted 
 */
export async function createAddress(address) {
    try {
        return await Address.insertMany(address);
    } catch (error) {
        error.type = 'database';
        throw error;
    }
}

/**
 * Function to find one addresses by id
 * @param {*} id ID from the address
 * @returns Address object
 */
export async function findAddress(id) {
    try {
        return await Address.findById(id);
    } catch (error) {
        error.type = 'database';
        throw error;
    }
}

/**
 * Function to find addresses
 * @param {*} query filter parameters
 * @param {*} options skip and limit parameters
 * @returns  Array of Addresses
 */
export async function findAddresses(query,options) {

    if(query.street){
        quer.street={
            '$regex': query.street,
            '$options': 'i'
          }
        }
    if(query.city){
        query.city={
            '$regex':query.city,
            '$options':1
        }
    }
    if(query.state){
        query.state={
            '$regex':query.state,
            '$options':1
        }
    }
    try {
        return await Address.find(query,null,options).sort({'street':1})
    } catch (error) {
        err.type = 'database';
        throw err;
    }
}

/**
 * Function to update addresses
 * @param {Object} Address Object with data that will be changed 
 * @param {String} id ObjectId of this document got from request params
 * @returns success message
 */
export async function updateAddress(address,id) {
    try {
        return await Address.findByIdAndUpdate(id,address);
    } catch (error) {
        err.type = 'database';
        throw err;
    }
}

/**
 * Function to update addresses
 * @param {Object} Address Object with data that will be changed 
 * @param {String} id ObjectId of this document got from request params
 * @returns success message
 */
export async function deleteAddress(id) {
    try {
        return await Address.deleteOne({'_id':id})
    } catch (error) {
        err.type = 'database';
        throw err;
    }
}