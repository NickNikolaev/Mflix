const { ObjectId } = require('bson');
const { getDB, COLL_MOVIES } = require('../../../config/mongodb');

const getOne = _id => getDB().collection(COLL_MOVIES).findOne({ _id: ObjectId(_id) });

module.exports = getOne;