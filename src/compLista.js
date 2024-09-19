import React from "react";
import CompProducto from "./compProductos";
function ListaDeProductos({ Productos }) {
  return (
    <div>
      <ul>
        {Productos.map((Producto, index) => (
          <li>
            <CompProducto
              key={index}
              nombreProducto={Producto.nombreProducto}
              precio={Producto.precio}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaDeProductos;