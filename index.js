const moduleName = 'index';
const moduleSystemType = 'ECMAScript';

console.log(moduleName, moduleSystemType);

import {
    moduleName as a1Name,
    moduleSystemType as a1SystemType,
} from './module-a/a1.js';

import {
    moduleName as b2Name,
    moduleSystemType as b2SystemType,
} from './module-b/b2.mjs';

const a2 = await import('./module-a/a2.cjs');
const { a2Name, a2SystemType } = a2;

const b1 = await import('./module-b/b1.js');
const { b1Name, b1SystemType } = b1;

console.log(
    'module a1 name: ',
    a1Name,
    ' module a1 System type : ',
    a1SystemType
);
console.log(
    'module a2 name: ',
    a2Name,
    ' module a2 System type : ',
    a2SystemType
);
console.log(
    'module b1 name: ',
    b1Name,
    ' module b1 System type : ',
    b1SystemType
);
console.log(
    'module b2 name: ',
    b2Name,
    ' module b2 System type : ',
    b2SystemType
);
