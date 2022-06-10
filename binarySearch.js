/*
 * input -> <Sorted list or array, item>
 * output -> <INDEX OR NULL>
 * */

function binarySearch(list, item) {
	let low = 0;
	let high = list.length - 1;
	while(low < high) {
		let middle = Math.ceil((low + high) / 2);
		let guess = list[middle]
		if(guess === item)
			return middle;
		if(guess > item)
			high = middle - 1
		else
			low = middle + 1

	}
	return null
}


//test
const arr = [1, 3, 5, 7, 9]
console.log(binarySearch(arr, 3)); //return 1
console.log(binarySearch(arr, -1)); //return null


