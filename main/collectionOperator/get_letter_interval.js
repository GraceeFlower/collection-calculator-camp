'use strict';

function get_letter_interval(number_a, number_b) {
  var res = [];
  if (number_a < number_b) {
    for(var item = number_a; item <= number_b; item++) {
      res.push(String.fromCharCode(96 + item));
    } 
  } else if (number_a > number_b) {
    for(var item = number_a; item >= number_b; item--) {
      res.push(String.fromCharCode(96 + item));
    }
  } else {
      res.push(String.fromCharCode(96 + number_a));
  }
  return res;
}

module.exports = get_letter_interval;