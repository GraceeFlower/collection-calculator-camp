function collect_same_elements(collection_a, collection_b) {
  var totalArr = collection_b.concat(collection_a);
  var res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, collection_b.length);
  return res; //TODO: res可与inline
}

module.exports = collect_same_elements;
