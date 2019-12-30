'use strict';
var calculate_median = function(collection){
  var res = collection.filter((item) => item % 2 === 0);
  var numLen = res.length;
  if (numLen % 2) {
    return res = res[(numLen - 1) / 2];
  } else {
    return res =  (res[numLen / 2 - 1] + res[numLen / 2]) / 2;
  }
};

module.exports = calculate_median;
