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
	return arrayEnsure(collection).filter(predicate);
}

function mySize(collection) {
	return arrayEnsure(collection).length;
}

function myFirst(array, n) {
	switch (true) {
		case n === undefined:
			return array[0];
			break;
		default:
			return array.slice(0, n);
	}
}

function myLast(array, n) {
	switch (true) {
		case n === undefined:
			return array.slice(-1).pop();
			break;
		default:
			return array.slice(parseInt(`-${n}`));
	}
}

function myKeys(object) {
	return Object.keys(object);
}

function myValues(object) {
	return Object.values(object);
}
