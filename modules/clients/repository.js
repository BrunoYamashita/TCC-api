import Client from '../../models/clients';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an client object for use.
 */
export async function getClient(params) {
  try {
    return await Client.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

export async function getClientByEmail(param) {
  try {
    return await Client.findOne({'username': {
      '$regex': param,
      '$options': 'i'
    }
  })

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

export async function createClient(client) {
  try {
    client = new Client(client);
    return await client.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

export async function updateClient(client) {
  try {

    client = new Client(client);

    return await Client.save()

  } catch (err) {
    err.type = 'database';
    throw err;

  }
};

export async function deleteClient(client) {
  try {

    await client.remove()

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

export async function findClients(query,options) {
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