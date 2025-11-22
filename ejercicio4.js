// Opciones por defecto
const defaults = { tema: "claro", idioma: "es" };

// Función para configurar usuario
function configurarUsuario(defaults, personalizadas) {
    // Usamos spread para combinar las configuraciones sin mutar los objetos originales
    const configuracionFinal = { ...defaults, ...personalizadas };

    // Usamos destructuración para obtener el idioma configurado
    const { idioma } = configuracionFinal;

    // Retornamos el idioma resultante
    return idioma;
}

// Caso 1: sin personalización (usa defaults)
const idioma1 = configurarUsuario(defaults, {});
console.log("Idioma configurado (caso 1):", idioma1);

// Caso 2: con personalización de idioma
const idioma2 = configurarUsuario(defaults, { tema: "oscuro", idioma: "en" });
console.log("Idioma configurado (caso 2):", idioma2);

// Verificamos que los objetos originales no se modificaron
console.log("Defaults originales:", defaults);