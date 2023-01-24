
// You should implement your task here.

module.exports = function towelSort (arr) {
  let temp = [],
      result = [],
      emptyArr = new Array();
  if(arr === undefined || arr.length === 0) {
	return emptyArr;
  } else {
	  for (let i = 0; i < arr.length; i++) {
		if((i+1) % 2 === 0) {
		  temp.push(arr[i].reverse());
		}
		if((i+1) % 2 != 0) {
		  temp.push(arr[i]);
		}
	  }
	  temp.join().split(",").forEach(item => {
		result.push(Number(item));
	  })
	  return result;
  }
}
