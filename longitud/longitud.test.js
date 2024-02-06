const longitud = require('./longitud');

test (' Longitud palabra hola = 4', ()=> {
    const palabra = 'hola';
    expect (longitud(palabra)).toBe(4);
    
});