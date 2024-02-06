const esPar = require ("./esPar");

test ('1 es impar, 2 es par y 0 es par', ()=>{
    expect(esPar(1)).toBe(false);
});

test ('2 es par', ()=>{
    expect(esPar(2)).toBe(true);
});

test ('0 es par', ()=> {
    expect(esPar(0)).toBe(true);
});