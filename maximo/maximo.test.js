const maximo = require ("./maximo.js");

test ('maximo de 1,2,3,4 es 4', () => {
    const array = [1,2,3,4];
    expect (maximo(array)).toBe(4);
});