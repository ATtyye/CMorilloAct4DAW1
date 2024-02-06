const contieneElemento = require ("./contieneElementos");

test ("contiene palabra ", () => {
    const array = ['carol', 'morillo', 'valderas'];
    expect(contieneElemento(array,'carol')).toBe(true);
});