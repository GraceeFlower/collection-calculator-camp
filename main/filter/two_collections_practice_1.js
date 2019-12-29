'use strict';

function choose_common_elements(collection_a, collection_b) {
  var totalArr = collection_b.concat(collection_a);
  var res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  });
  return res;
}

module.exports = choose_common_elements;
