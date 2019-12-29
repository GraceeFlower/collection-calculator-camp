'use strict';

function choose_multiples_of_three(collection) {
  var res = collection.filter((item) => !(item % 3));
  return res;
}

module.exports = choose_multiples_of_three;
