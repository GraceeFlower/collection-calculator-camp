function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  object_b.value.map((item) => {
    var index = checkItem(collection_a, item);
    var count = collection_a[index].count;
    collection_a[index].count -= Math.floor(count / 3);
  });
  return collection_a;
}

function count_same_elements(collection) {
  var results = [];
  collection.forEach(function (value) {
    var num = value.match(/\d/) ? parseInt(value.slice(-1)) : 1;
    var key = value.match(/\d/) ? value.slice(0, 1) : value;
    var item = checkItem(results, value);
    if (item !== "") {
      results[item].count++;
    } else {
      var result = {};
      result.key = key;
      result.count = num;
      results.push(result);
    }
  });
  return results;
}

function checkItem(arr, element) {
  for(var item = 0; item < arr.length; item++) {
    if (arr[item].key === element) {
      return item;
    }
  }
  return ""; 
}

module.exports = create_updated_collection;
