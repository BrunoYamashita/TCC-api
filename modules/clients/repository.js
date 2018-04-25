import Client from '../../models/clients';

/**
 * Find client by id
 * @param {string} params database id.
 * @returns { Object } returns an client object for use.
 */
export async function findOne(id) {
  try {
    return await Client.findById(id)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Find client by username
 * @param {string} username email of the client
 * @returns { Object } returns an client object for use.
 */
export async function findByUsername(username) {
  try {
    return await Client.findOne({'username': {
      '$regex': username,
      '$options': 'i'
    }
  })

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Create a client
 * @param {Object} client data to create a new client
 * @returns { Object } returns an client object for use.
 */
export async function create(client) {
  try {
    client = new Client(client);
    return await client.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find and update a client by its id
 * @param {String } id ObjectId of a client
 * @param {Object} client 
 */
export async function update(id,client) {
  try {

    return await Client.findByIdAndUpdate(id,client);

  } catch (err) {
    err.type = 'database';
    throw err;

  }
};

/**
 * Delete One client by its id
 * @param {String} id Objectid of client
 */
export async function deleteOne(id) {
  try {

    return await Client.deleteOne({'_id':id});

  } catch (err) {
    err.type = 'database';
    throw err;

  }
};

/**
 * Find clients
 * @param {Object} query find criterias
 * @param {Object} options Skip and limit as object
 * @returns array of clients
 */
export async function find(query,options) {
  if (query.name) {
    query.name = {
      '$regex': query.name,
      '$options': 'i'
    }
  }

  if (query.username) {
    query.username = {
      '$regex': query.username,
      '$options': 'i'
    }
  }

  if (query.created) {
    query.created = {
      $gte: query.created
    }
  }

  try {

    return await Client.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};