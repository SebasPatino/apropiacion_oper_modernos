// Definimos la función procesarPedido
// Recibe un objeto pedido y un número indefinido de extras
function procesarPedido(pedido, ...extras) {
    // Usamos destructuración para obtener las propiedades del pedido
    const { cliente, producto, cantidad } = pedido;

    // Creamos un objeto final consolidado
    const pedidoFinal = {
        cliente,          // nombre del cliente
        producto,         // producto solicitado
        cantidad,         // cantidad solicitada
        extras            // arreglo con todos los extras recibidos
    };

    // Retornamos el objeto final
    return pedidoFinal;
}

// Creamos un pedido inicial
const pedido = { cliente: "Karol", producto: "Ramen", cantidad: 10 };

// Llamamos a la función con extras adicionales
const resultado = procesarPedido(pedido, "Takis", "CocaCola", "Huevos");

// Mostramos en consola el resultado final
console.log("Pedido final:", resultado);