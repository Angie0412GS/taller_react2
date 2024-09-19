import React from "react";
import CompSaludo from "./compSaludo";
import CompProducto from "./compProductos";
import ContadorFuncional from "./compContadorFuncional";
import ContadorClase from "./compContadorClases";
import ListaDeProductos from "./compLista";
import DetalleProducto from "./compDetallespro";

function App() {
  return (
    <div>
      <h1>Ejercicio 1: Crear un componente Saludo</h1>
      <CompSaludo nombre="Katherine" />
    </div>
  );
}

export default App;

function App2() {
  return (
    <div>
      <h1>Ejercicio 2: Crear un componente Producto</h1>
      <CompProducto nombreProducto="Camisa" precio="20.000" />
    </div>
  );
}
//export default App2;

function App3() {
  return (
    <div>
      <h1>Ejercicio 3: Comparar Componentes Funcionales y de Clase</h1>
      <ContadorFuncional />
      <ContadorClase />
    </div>
  );
}
//export default App3;

const Productoslista = [
  { nombreProducto: "Galletas", precio: "1.000" },
  { nombreProducto: "leche", precio: "2.000" },
  { nombreProducto: "Helado", precio: "13.000" },
  { nombreProducto: "Gomitas", precio: "5.000" },
  { nombreProducto: "Chocolate", precio: "10.000" },
];
function App4() {
  return (
    <div>
      <h1>Ejercicio 4: Crear un componente ListaDeProductos</h1>
      <ListaDeProductos Productos={Productoslista} />
    </div>
  );
}
//export default App4;

function App5(){
  return(
    <div>
      <h1>Ejercicio 5: Detalles de productos</h1>
      <DetalleProducto nombre="Helado de pay de limón" precio= "22.000" descripcion="descripcionUn postre clásico y refrescante que le gusta a sharita"/>
    </div>
  );
}
//export default App5;
