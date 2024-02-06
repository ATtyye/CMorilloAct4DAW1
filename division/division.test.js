const division = require('./division.js');

test('division', () => {
    expect(division(4,2)).toBe(2);
});

test ('division por 0 ',() => {
    expect(() => division(4,0)).toThrow();
});

