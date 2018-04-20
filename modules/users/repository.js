import User from '../../models/users';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an user object for use.
 */
export async function getUser(params) {
  try {
    return await User.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

export async function getUserByEmail(param) {
  try {
    return await User.findOne({'username': {
      '$regex': param,
      '$options': 'i'
    }
  })

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

export async function createUser(user) {
  try {
    user = new User(user);
    return await user.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

export async function updateUser(user,id) {
  try {

    return await User.findByIdAndUpdate(id,user);

  } catch (err) {
    err.type = 'database';
    throw err;

  }
};

export async function deleteUser(id) {
  try {

    await User.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

export async function findUsers(query,options) {
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

    return await User.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};