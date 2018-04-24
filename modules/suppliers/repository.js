import Supplier from '../../models/suppliers';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an supplier object for use.
 */
export async function getSupplier(params) {
  try {
    return await Supplier.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Create an supplier
 * @param {Object} supplier Object from request
 * @returns mongoose schema supplier object
 */
export async function createSupplier(supplier) {
  try {
    supplier = new Supplier(supplier);
    return await supplier.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find an supplier and update it
 * @param {Object} supplier fields to udpate as a object
 * @param {string} id ObjectId of a supplier
 * @returns supplier object
 */
export async function updateSupplier(supplier,id) {

    return await Supplier.findByIdAndUpdate(id,supplier);
};

/**
 * Delete One supplier by its id
 * @param {string} id ObjectId from an supplier
 * @returns success message
 */
export async function deleteSupplier(id) {
  try {

    await Supplier.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

/**
 * Find suppliers   
 * @param {Object} query fields criteria as object
 * @param {Object} options skip and limit as object
 * @returns Suppliers objects
 */
export async function findSuppliers(query,options) {
  if (query.created) {
    query.created = {
      $gte: query.created
    }
  }

  try {

    return await Supplier.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};