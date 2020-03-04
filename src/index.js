
exports.min = function min(array) {
  if (!array || array.length == 0) {
    return 0;
  }
  else {
    let a;
    array.sort((a,b) => a-b);
    return array[0];
  }
}

exports.max = function max(array) {
  if (!array || array.length == 0) {
    return 0;
  }
  else {
    let a;
    array.sort((a,b) => a-b);
    return array[array.length - 1];
  }
}

exports.avg = function avg(array) {
  if (!array || array.length == 0) {
    return 0;
  }
  else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    let sum1 = sum / array.length
    return sum1;
  }
}
