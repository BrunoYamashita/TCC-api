import User from '../../models/users';

/**
 * This function should only be used for GET requests passing the queryString as the parameter.
 * @param {string} params  querystring must be in databse format.
 * @returns { Object } returns an user object for use.
 */
export async function findById(params) {
  try {
    return await User.findById(params)

  } catch (err) {
    err.type = 'database'
    throw err;

  }
}

/**
 * Find onde user by its email
 * @param {String} param User email
 * @returns user object less password field
 */
export async function findByUsername(param) {
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

/**
 * Create an user
 * @param {Object} user Object from request
 * @returns mongoose schema user object
 */
export async function create(user) {
  try {
    user = new User(user);
    return await user.save();
  } catch (err) {
    err.type = 'database'
    throw err;
  }
};

/**
 * Find an user and update it
 * @param {Object} user fields to udpate as a object
 * @param {string} id ObjectId of a user
 * @returns user object
 */
export async function update(user,id) {

    return await User.findByIdAndUpdate(id,user);
};

/**
 * Delete One user by its id
 * @param {string} id ObjectId from an user
 * @returns success message
 */
export async function deleteOne(id) {
  try {

    await User.deleteOne({'_id':id})

  } catch (err) {

    err.type = 'database';
    throw err;

  }
};

/**
 * Find users   
 * @param {Object} query fields criteria as object
 * @param {Object} options skip and limit as object
 * @returns Users objects
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

    return await User.find(query, null, options).sort({
      'name': 1
    })

  } catch (err) {
    err.type = 'database';
    throw err;

  } 
};