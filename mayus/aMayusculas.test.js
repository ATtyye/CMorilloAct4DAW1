const aMayusculas = require('./aMayusculas.js');

test('Mayuscula', () => {
    expect(aMayusculas("hola")).toBe("HOLA");
});