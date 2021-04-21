const { getDB, COLL_MOVIES } = require('../../../config/mongodb');

const getAll = () => getDB().collection(COLL_MOVIES).find().toArray();

module.exports = getAll;