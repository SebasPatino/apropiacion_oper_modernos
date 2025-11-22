// Arreglo inicial del inventario
const inventario = ["cámara", "trípode", "micrófono"];

// Función para agregar un nuevo ítem al inventario
function agregarInventario(lista, nuevoItem) {
    // Usamos spread para crear una nueva lista sin modificar la original
    const nuevaLista = [...lista, nuevoItem];

    // Mostramos un mensaje indicando cuántos ítems tiene ahora el inventario
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);

    // Retornamos la nueva lista
    return nuevaLista;
}

// Agregamos un nuevo ítem al inventario
const inventarioActualizado = agregarInventario(inventario, "fondo");

// Mostramos en consola el inventario original y el actualizado
console.log("Inventario original:", inventario);
console.log("Inventario actualizado:", inventarioActualizado);