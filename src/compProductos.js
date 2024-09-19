// Uso de Props
//Ejercicio 2: Crear un componente Producto

import React from "react";

function CompProducto(props) {
  return (
    <div>
      <h2>Producto: {props.nombreProducto}</h2>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}

export default CompProducto;
