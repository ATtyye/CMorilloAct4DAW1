const invertirCadena = require ("./invertirCadena.js");

test ('hola es olah', ()=> {
    const carol = 'carol';
    expect (invertirCadena(carol)).toBe("lorac");
});