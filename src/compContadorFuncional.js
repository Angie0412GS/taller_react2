// Componentes Funcionales vs. Componentes de Clase
//Ejercicio 3: Comparar Componentes Funcionales y de Clase

import React, { useState } from "react";
function ContadorFuncional() {
  const [numero, setnumero] = useState(0);
  return (
    <div>
      <h2>Contador funcional</h2>
      <p>{numero}</p>
      <button onClick={() => setnumero(numero + 1)}>Aumentar</button>
    </div>
  );
}
export default ContadorFuncional;
