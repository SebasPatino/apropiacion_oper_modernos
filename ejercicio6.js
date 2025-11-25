const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

// Función para calcular el total vendido del primer producto
function calcularTotal(ventas) {
    // Destructuración anidada: accedemos directamente a precio y unidades
    const [{ detalles: { precio, unidades } }] = ventas;
    console.log("Precio:", precio, "Unidades:", unidades);
    
    // Retornamos el total vendido (precio × unidades)
    return precio * unidades;
}

const total = calcularTotal(ventas);
console.log("Total vendido del primer producto:", total);