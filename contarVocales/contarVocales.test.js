const contarVocales = require ("./contarVocales");

test ('contar vocales ', () => {
    expect(contarVocales('hola')).toBe(2);
});

test ('cadena vacia tiene 0 vocales', () => {
    expect(contarVocales('')).toBe(0);
});

test ('comprobar contar vocales en una cadena sin vocales', ()=>{
    expect(contarVocales('kdkdkdkd')).toBe(0);
});