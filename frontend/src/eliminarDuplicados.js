
// funcion que elimina los duplicados de un array

function eliminarDuplicados(array) {
    const unicos = [];
    for (let i = 0; i < array.length; i++) {
        if (!unicos.includes(array[i])) {
            unicos.push(array[i]);
        }
    }
    return unicos;
}

// Prueba con los valores especificados
const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log('Array original:', numeros);
console.log('Array sin duplicados:', eliminarDuplicados(numeros));

// Pruebas adicionales
console.log('\n--- Pruebas adicionales ---');
console.log('Caso 1 - Todos duplicados:', eliminarDuplicados([5, 5, 5, 5]));
console.log('Caso 2 - Sin duplicados:', eliminarDuplicados([1, 2, 3, 4]));
console.log('Caso 3 - Array vacío:', eliminarDuplicados([]));
console.log('Caso 4 - Un solo elemento:', eliminarDuplicados([7]));
