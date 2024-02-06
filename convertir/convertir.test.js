const { convertirAEuros, calcularCostoEnEuros } = require ("./convertir");


test ('comprobar conversion correcta', ()=>{
    expect(convertirAEuros(1)).toBeCloseTo(0.88,2);
});

test ('verificar el calculo correcto', ()=> {
    expect(calcularCostoEnEuros(3,2)).toBeCloseTo(5.28,2);
});