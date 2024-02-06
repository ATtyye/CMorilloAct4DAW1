const multiplicacion = require('./multiplicacion.js');

test('multiplicacion 2 x 2 = 4', () => {
    expect(multiplicacion(2, 2)).toBe(4);
});