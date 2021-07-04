'use strict';

const singleton = (() => {
	const instance = {};
	return () => instance;
})();

//  Usage

console.assert(singleton() === singleton());
console.log('instance are equal', singleton());