'use strict';

function amount_even(collection) {
  var res = collection.filter((item) => item % 2 === 0);
  return res.reduce((pre, cur) => pre + cur);
}

module.exports = amount_even;
