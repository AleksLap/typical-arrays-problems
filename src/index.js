
exports.min = function min (array) {

  if(typeof(array) !== 'undefined' && array.length !== 0){
    let result = array[0];
    for(let i = 1; i < array.length; i++) {
      if(array[i] < result) {
        result = array[i];
      }
    }
    return result;
  } else {
    return 0;
  }

}

exports.max = function max (array) {

  if(typeof(array) !== 'undefined' && array.length !== 0){
    let result = array[0];
    for(let i = 1; i < array.length; i++) {
      if(array[i] > result) {
        result = array[i];
      }
    }
    return result;
  } else {
    return 0;
  }

}

exports.avg = function avg (array) {
  let result = 0;

  if(typeof(array) !== 'undefined' && array.length !== 0){
    for(let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result / array.length;
  } else {
    return 0;
  }  
}
