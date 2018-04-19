import Address from '../../models/address';

export async function findAddress(param) {
    try {
        return await Address.findById(param);
    } catch (error) {
        error.type = 'database';
        throw error;
    }
}

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
 * 
 * @param {Object} Address Object with data that will be changed 
 * @param {String} id ObjectId of this document got from request params
 */
export async function updateAddress(Address,id) {
    try {
        return await Address.findByIdAndUpdate(id,Address);
    } catch (error) {
        err.type = 'database';
        throw err;
    }
}