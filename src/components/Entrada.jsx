import { useState, ue } from "react";

const Entrada = () => {
  const [valor, setValor] = useState("");
  const [email, setEmail] = useState("");

  const input = (event) => {
    // valor = event.target.value;
    setValor(event.target.value);
    // console.log(event.target.value);
  };

  const email_function = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <label>Usuario: </label>
      <input onChange={input}></input>
      <br></br>
      <label>Email: </label>
      <input onChange={email_function}></input>
      <p>Tu usuario es:{valor}</p>
      <p>Tu email es: {email}</p>
    </>
  );
};

export default Entrada;
