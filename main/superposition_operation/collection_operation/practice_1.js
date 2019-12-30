'use strict';

function hybrid_operation(collection) {
  var res = collection.map((item) => item * 3 + 2);
  return res.reduce((pre, cur) => pre + cur);
}

module.exports = hybrid_operation;
