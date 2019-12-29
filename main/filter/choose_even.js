'use strict';

function choose_even(collection) {
  var res = collection.filter((item) => !(item % 2));
  return res;
}

module.exports = choose_even;
