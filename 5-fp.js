'use strict';

const singleton = (instance => () => instance)({});

// Usage

console.assert(singleton() === singleton());
console.log('instances are equal');

const o1 = singleton();
o1.name = 'Ruslan'
const o2 = singleton();
console.log(o2.name);