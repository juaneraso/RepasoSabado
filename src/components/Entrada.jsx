import { useState } from "react";

const Entrada = () => {
  const [valor, setValor] = useState("");

  const [contador, setContador] = useState(0);

  const [nombre, setNombre] = useState("");

  const input = (event) => {
    // valor = event.target.value;
    setValor(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <input onChange={input}></input>
      <p>Username: {valor}</p>
    </>
  );
};

export default Entrada;
