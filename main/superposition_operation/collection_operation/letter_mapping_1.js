'use strict';

function even_to_letter(collection) {
  var res = collection.filter((item) => item % 2 === 0);
  return res.map((item) => item = generateString(item)); //TODO: 为什么要给item赋值？
}

function generateString(index) {
  var excess = Math.floor((index - 1) / 26);
  var basic = 96 + index;
  var former = 96 + excess;
  var latter = 96 + index - excess * 26;
  if (!excess) {
    return String.fromCharCode(basic);
  } else {
    return String.fromCharCode(former) + String.fromCharCode(latter);
  }
}

module.exports = even_to_letter;
