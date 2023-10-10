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

const { a2Name, a2SystemType } = import('./module-a/a2.cjs');

const { b1Name, b1SystemType } = import('./module-b/b1.js');
