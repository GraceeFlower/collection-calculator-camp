'use strict';

function collect_max_number(collection) {
  var res = collection.reduce((pre, cur) => pre > cur ? pre : cur);
  return res; //TODO: res可与inline
}

module.exports = collect_max_number;
