import React from "react";
function DetalleProducto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <p>{props.descripcion}</p>
    </div>
  );
}
export default DetalleProducto;
