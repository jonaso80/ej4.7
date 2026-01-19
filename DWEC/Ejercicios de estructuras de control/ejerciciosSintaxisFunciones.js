export function agregar_producto(productos, nombre, stock, precio) {
  productos.push([nombre, stock, precio]);
}

export function eliminar_producto(productos, nombre) {
  let indice = productos.findIndex((i) => i[0] === nombre);
  if (indice !== -1) {
    productos.splice(indice, 1);
  } else {
    alert("Producto no encontrado");
  }
}

export function actualizar_producto(productos, nombre, nuevoStock, nuevoPrecio) {
    console.log("Entra a funcion actualizar");
    console.log(nombre);
    let indice = productos.findIndex(i => i[0] === nombre);
    if (indice !== -1) {
        productos[indice][1] = nuevoStock;
        productos[indice][2] = nuevoPrecio;
    }else {
        alert("Producto no encontrado");
    }
} 

export function mostrar_productos(productos) {
    let listado_productos = "productos:\n";
    productos.forEach (p=> {
        listado_productos += `${p[0]} - Stock: ${p[1]}, precio: ${p[2]}€\n`;
    });
    alert(listado_productos);
}

export function calcular_valor_total(productos) {
    let total = 0;
    productos.forEach(p => {
        total = total + p[1] * p[2];
    });
    alert("Valor total: "+total);
}