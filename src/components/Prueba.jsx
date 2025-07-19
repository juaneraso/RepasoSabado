import { useEffect, useState } from "react";

function Prueba() {
  const [numero, setNumero] = useState(0);
  const [datos, setDatos] = useState([]);
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );

        const datosObtenidos = await respuesta.json();
        setDatos(datosObtenidos);
        setUsuario(datosObtenidos[0]?.name);
      } catch (err) {
        console.log("Error al hacer fetch:", err.message);
      }
    };

    fetchDatos();
  }, []);

  console.log("Datos:", datos);
  // console.log("PosicionDatoCero:", datos[0].name);

  console.log("UsuarioPrueba:", datos[0]?.name);
  console.log("Usuario:", usuario);

  const aumentar = () => {
    setNumero(numero + 1);
  };

  const disminuir = () => {
    setNumero(numero - 1);
  };

  // console.log(numero);

  return (
    <>
      <h1>Componente de Prueba</h1>

      <button onClick={aumentar}>AUMENTAR</button>
      <button onClick={disminuir}>DISMINUIR</button>

      <p>{numero}</p>
      <h2>Datos Usuario</h2>
      <label>Usuario:</label>
      <h3>{datos[0]?.name}</h3>
      <label>Usuario:</label>
      <h4>{usuario}</h4>
    </>
  );
}

export default Prueba;
