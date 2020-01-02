'use strict';
var is_exist_element = function(collection,element){
  var res = collection.filter((value, index) => index % 2 === 0);
  return res.includes(element); //TODO: res可以inline
};

module.exports = is_exist_element;
