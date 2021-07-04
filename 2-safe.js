'use strict';

// function CreateConstructor() {
// 	const single = this;
// 	return function () { return single };
// }

// const Singleton = new CreateConstructor();

const Singleton = new (function () {
	const single = this;
	return function () { return single };
})();

if (new Singleton() === new Singleton())
	console.log('instance are equel');
