'use strict';
var is_exist_element = function(collection,element){
  var res = collection.filter((value, index) => index % 2 === 0);
  return res.includes(element);
};

module.exports = is_exist_element;
