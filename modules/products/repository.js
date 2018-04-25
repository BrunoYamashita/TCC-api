import Product from '../../models/products';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an product object for use.
 */
export async function findOne(params) {
  try {
    return await Product.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Create an product
 * @param {Object} product Object from request
 * @returns mongoose schema product object
 */
export async function create(product) {
  try {
    product = new Product(product);
    return await product.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find an product and update it
 * @param {Object} product fields to udpate as a object
 * @param {string} id ObjectId of a product
 * @returns product object
 */
export async function update(product,id) {

    return await Product.findByIdAndUpdate(id,product);
};

/**
 * Delete One product by its id
 * @param {string} id ObjectId from an product
 * @returns success message
 */
export async function DeleteOne(id) {
  try {

    await Product.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

/**
 * Find products   
 * @param {Object} query fields criteria as object
 * @param {Object} options skip and limit as object
 * @returns Products objects
 */
export async function find(query,options) {
  if (query.created) {
    query.created = {
      $gte: query.created
    }
  }

  try {

    return await Product.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};