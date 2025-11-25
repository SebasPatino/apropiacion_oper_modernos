function fusionarColecciones(lista1, lista2) {
    try {
        // Validamos que ambas listas sean arreglos
        if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
            throw new Error("Las colecciones proporcionadas no son válidas (deben ser arreglos).");
        }

        // Usamos spread para fusionar las dos listas sin mutarlas
        const coleccionFinal = [...lista1, ...lista2];

        // Retornamos la colección final
        return coleccionFinal;
    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error("Error en la fusión:", error.message);
        return null;
    }
}

// Caso correcto: ambas listas son arreglos
const listaA = ["CocaCola", "Sprite"];
const listaB = ["Pepsi", "7up"];
const resultadoValido = fusionarColecciones(listaA, listaB);

console.log("Colección final válida:", resultadoValido);
console.log("Lista A original:", listaA);
console.log("Lista B original:", listaB);

// Caso incorrecto: una de las listas no es un arreglo
const resultadoInvalido = fusionarColecciones(listaA, "no es un arreglo");
console.log("Colección final inválida");