import { useState } from "react";

function Prueba() {
  console.log("hola mundo");

  const [numero, setNumero] = useState(0);

  // let numero = 0;

  const aumentar = () => {
    // numero = numero + 1;

    if (numero < 10) {
      setNumero(numero + 1);
    }
  };

  console.log(numero);

  return (
    <>
      <h1>Componente de Prueba</h1>

      <h1>Hola estudiantes</h1>

      <button onClick={aumentar}>CLICK</button>

      <p>{numero}</p>
    </>
  );
}

export default Prueba;
