'use strict';
var calculate_median = function(collection){
  var res = collection.filter((value, index) => index % 2 !== 0);
  var numLen = res.length;
  if (numLen % 2) {
    return res = res[(numLen - 1) / 2]; //TODO: res赋值？
  } else {
    return res =  (res[numLen / 2 - 1] + res[numLen / 2]) / 2;
  }
};

module.exports = calculate_median;
