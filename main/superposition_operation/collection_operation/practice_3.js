'use strict';

function hybrid_operation_to_uneven(collection) {
  var res = collection.filter((item) => item % 2 !== 0);
  res = res.map((item) => item * 3 + 5);
  return res.reduce((pre, cur) => pre + cur); //TODO: res可以inline
}

module.exports = hybrid_operation_to_uneven;
