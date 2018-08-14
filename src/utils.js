console.log('utils.js is running');

// Named export
const square = (x) => x * x;

const add = (x, y) => x + y;

export const sub = (x, y) => x - y;

export {square, add};

// Default exports
export default (x, y) => x - y;
