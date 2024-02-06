const esPalindromo = require("./esPalindromo");

test ('verificar si es palindromo', ()=> {
    expect(esPalindromo('ana')).toBe(true);
});

test ('comprobar que es rebutjada', ()=> {
    expect(esPalindromo('carol')).toBe(false);
});

test ('comprobar con espacios y puntuaciones', ()=>{
    expect(esPalindromo('a-n a')).toBe(true);
});