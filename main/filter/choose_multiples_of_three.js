'use strict';

function choose_multiples_of_three(collection) {
  var res = collection.filter((item) => !(item % 3));
  return res; //TODO: res可与inline
}

module.exports = choose_multiples_of_three;
