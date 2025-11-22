// Definimos la función registrarActividad
function registrarActividad(actividad) {
    try {
        // Usamos destructuración para obtener las propiedades
        const { nombre, fecha } = actividad;

        // Validamos que ambas propiedades existan
        if (!nombre || !fecha) {
            throw new Error("La actividad no es válida");
        }

        // Si todo está correcto, mostramos un mensaje confirmando el registro
        console.log(`Actividad registrada: ${nombre} en la fecha ${fecha}`);
    } catch (error) {
        // Capturamos el error y mostramos un mensaje claro
        console.error(error.message);
    }
}

// Caso correcto: objeto con todas las propiedades
registrarActividad({ nombre: "Capacitación", fecha: "Noviembre 29/2025" });

// Caso incorrecto: falta la propiedad 'fecha'
registrarActividad({ nombre: "Presentación Proyecto Final" });

// Caso incorrecto: falta la propiedad 'nombre'
registrarActividad({ fecha: "Diciembre 24/2025" });