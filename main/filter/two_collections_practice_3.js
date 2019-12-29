'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var res = collection_a.filter((value) => {
    return collection_b.some((item) => !(value % item));
  });
  return res;
}

module.exports = choose_divisible_integer;
