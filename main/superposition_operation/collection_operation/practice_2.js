'use strict';

function hybrid_operation_to_uneven(collection) {
  var res = collection.filter((item) => item % 2 !== 0);
  return res.map((item) => item * 3 + 2); //TODO: res可以inline
}

module.exports = hybrid_operation_to_uneven;
