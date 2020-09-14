const arr = [1,2,3];
//Array.myMap
Array.prototype.myMap = function(cb) {
	let result = [];
	for (let i=0; i<this.length; i++) {
		result[i] = cb(this[i]);
	}
	return result;
}

const arr2 = arr.myMap((value)=>{
	return value * 2;
});
console.log(arr2);

//Array.myReduce
Array.prototype.myReduce = function(cb, init) {
	let obj = Object(this);
	let len = obj.length;
	let value = init;
	let index = 0;
	while (index < len) {
		value = cb(value, obj[index]);
		index ++;
	}
	return value;
}

const reduceResult = arr.myReduce((acc, cur) => acc + cur, 10);
console.log(reduceResult);

//Array.myFilter
Array.prototype.myFilter = function(cb) {
	let result = [];
	for (let i = 0; i<this.length; i++) {
		if (cb(this[i])) {
			result.push(this[i]);
		}
	}
	return result;
}
const filterArr = arr.myFilter((value) => value >= 2);
console.log(filterArr);


//Object forEach
const obj = {name:"Duan", age:18};
Object.prototype.forEach = function(cb) {
	const keys = Object.keys(this);
	for (let i=0; i < keys.length; i++) {
		cb(keys[i], this[keys[i]]);
	}
}

obj.forEach((key, value) => {
    console.log(key, value);
});




