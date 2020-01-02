'use strict';

function choose_no_repeat_number(collection) {
  var res = collection.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
  return res; //TODO: res可与inline
}

module.exports = choose_no_repeat_number;
