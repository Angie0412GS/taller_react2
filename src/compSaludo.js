// Creación de Componentes
//Ejercicio 1: Crear un componente Saludo

import React from "react";

function CompSaludo(props) {
  return (
    <div>
      <h2>¡Bienvenido a mi aplicación de React, {props.nombre}!</h2>
    </div>
  );
}

export default CompSaludo;
