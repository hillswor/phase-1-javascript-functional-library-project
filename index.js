function arrayEnsure(collection) {
	let array;
	if (Array.isArray(collection)) {
		return collection;
	} else {
		array = Object.values(collection);
	}
	return array;
}

function myEach(collection, callback) {
	const array = arrayEnsure(collection);
	array.forEach((element) => callback(element));
	return collection;
}

function myMap(collection, callback) {
	return arrayEnsure(collection).map((element) => callback(element));
}

function myReduce(collection, callback, acc) {
	debugger;
	let reduced;
	const array = arrayEnsure(collection);
	switch (true) {
		case acc === undefined:
			reduced = array.reduce(callback);
			break;
		default:
			reduced = array.reduce(callback, acc);
	}
	return reduced;
}

function myFind(collection, predicate) {
	debugger;
	return arrayEnsure(collection).find(predicate);
}

function myFilter(collection, predicate) {
	const filtered = collection.filter(predicate);
	return filtered;
}

const intArr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6];
const strArr = ["maru", "choux", "doge", "coco", "waychillgoldeneye", "trance"];
const objB = { b: "b" };
const objArr = [{ a: "a" }, objB];

function findCBGenerator(target) {
	return function (currEl) {
		return target === currEl;
	};
}
