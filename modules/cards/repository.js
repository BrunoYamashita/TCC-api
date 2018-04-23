import Card from '../../models/cards';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an card object for use.
 */
export async function getCard(params) {
  try {
    return await Card.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Create an card
 * @param {Object} card Object from request
 * @returns mongoose schema card object
 */
export async function createCard(card) {
  try {
    card = new Card(card);
    return await card.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find an card and update it
 * @param {Object} card fields to udpate as a object
 * @param {string} id ObjectId of a card
 * @returns card object
 */
export async function updateCard(card,id) {

    return await Card.findByIdAndUpdate(id,card);
};

/**
 * Delete One card by its id
 * @param {string} id ObjectId from an card
 * @returns success message
 */
export async function deleteCard(id) {
  try {

    await Card.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

/**
 * Find cards   
 * @param {Object} query fields criteria as object
 * @param {Object} options skip and limit as object
 * @returns Cards objects
 */
export async function findCards(query,options) {
  try {

    return await Card.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};