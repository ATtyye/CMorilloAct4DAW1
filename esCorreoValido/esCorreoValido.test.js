const esCorreoValido = require ("./esCorreoValido");

test ('contiene @', ()=> {
    expect(esCorreoValido('carol@gmail.com')).toBe(true);
});

test ('error si no contiene @ ', () => {
    expect(esCorreoValido('carolgmail.com')).toBe(false);
});

test ('error si no tiene dominio', () => {
    expect(esCorreoValido('carol@.com')).toBe(false);
});