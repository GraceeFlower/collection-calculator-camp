'use strict';

function collect_min_number(collection) {
  var res = collection.reduce((pre, cur) => pre > cur ? cur : pre);
  return res; //TODO: res可与inline
}

module.exports = collect_min_number;

