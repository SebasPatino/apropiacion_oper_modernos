// Función para actualizar el perfil
function actualizarPerfil(perfil, ...nuevosDatos) {
    // Creamos un objeto vacío para acumular los datos parciales
    let datosCombinados = {};

    // Recorremos cada objeto parcial y lo vamos combinando con spread
    for (const dato of nuevosDatos) {
        datosCombinados = { ...datosCombinados, ...dato };
    }

    // Retornamos un nuevo objeto perfil (no mutamos el original)
    return { ...perfil, ...datosCombinados };
}

// Perfil inicial
const perfil = { nombre: "Sebastián", edad: 22, ciudad: "Bucaramanga" };

// Actualizamos el perfil con varios datos parciales
const perfilActualizado = actualizarPerfil(
    perfil,
    { edad: 24 },
    { ciudad: "Madrid" },
    { profesion: "Técnico" }
);

// Mostramos en consola el perfil original y el actualizado
console.log("Perfil original:", perfil);
console.log("Perfil actualizado:", perfilActualizado);