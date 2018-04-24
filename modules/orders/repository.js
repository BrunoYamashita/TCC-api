import Order from '../../models/orders';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an order object for use.
 */
export async function getOrder(params) {
  try {
    return await Order.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Create an order
 * @param {Object} order Object from request
 * @returns mongoose schema order object
 */
export async function createOrder(order) {
  try {
    order = new Order(order);
    return await order.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find an order and update it
 * @param {Object} order fields to udpate as a object
 * @param {string} id ObjectId of a order
 * @returns order object
 */
export async function updateOrder(order,id) {

    return await Order.findByIdAndUpdate(id,order);
};

/**
 * Delete One order by its id
 * @param {string} id ObjectId from an order
 * @returns success message
 */
export async function deleteOrder(id) {
  try {

    await Order.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

/**
 * Find orders   
 * @param {Object} query fields criteria as object
 * @param {Object} options skip and limit as object
 * @returns Orders objects
 */
export async function findOrders(query,options) {
  if (query.created) {
    query.created = {
      $gte: query.created
    }
  }

  try {

    return await Order.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};