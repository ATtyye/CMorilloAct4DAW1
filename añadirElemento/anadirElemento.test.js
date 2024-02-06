const  anadirElemento  = require("./anadirElemento.js");

test ('comprueba que 4 se añade', () => {
    let array = [1,2,3];
    expect(anadirElemento(array,4)).toEqual([1,2,3,4]);
});