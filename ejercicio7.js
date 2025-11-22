function evaluar(...valores) {
    try {
        // Validamos que todos los valores sean numéricos
        for (const valor of valores) {
            if (typeof valor !== "number" || isNaN(valor)) {
                throw new Error(`El valor "${valor}" no es numérico`);
            }
        }

        // Creamos una nueva lista usando spread (inmutabilidad)
        const nuevaLista = [...valores];

        // Calculamos la suma con un bucle for...of
        let suma = 0;
        for (const num of nuevaLista) {
            suma += num;
        }

        // Calculamos el promedio
        const promedio = suma / nuevaLista.length;

        // Retornamos el promedio
        return promedio;
    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error("Error en la evaluación:", error.message);
    }
}

// Caso correcto: todos los valores son numéricos
console.log("Promedio válido:", evaluar(3, 4, 2, 5));

// Caso incorrecto: uno de los valores no es numérico
console.log("Promedio inválido:", evaluar(4, "hola", 3));