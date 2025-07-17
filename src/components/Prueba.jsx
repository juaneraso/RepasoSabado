import { useEffect, useState } from "react";

function Prueba() {
  const [numero, setNumero] = useState(0);
  const [datos, setDatos] = useState([]);
  const [usuario, setUsuario] = useState("");

  let nombre = "";
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );

        const datosObtenidos = await respuesta.json();
        setDatos(datosObtenidos);
      } catch (err) {
        console.log("Error al hacer fetch:", err.message);
      }
    };

    fetchDatos();
  }, [usuario]);

  console.log("Datos:", datos);
  // console.log("PosicionDatoCero:", datos[0].name);

  console.log("UsuarioPrueba:", datos[0]?.name);

  // if (datos[0] == true) {
  //   console.log("NombreUsuario:", datos[0].name);
  //   setUsuario(datos[0].name);
  //   nombre = datos[0].name;
  // }
  // console.log(usuario);

  // console.log("NombreUsuario:", datos[0].name);

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

      <h1>Hola estudiantes</h1>

      <button onClick={aumentar}>AUMENTAR</button>
      <button onClick={disminuir}>DISMINUIR</button>

      <p>{numero}</p>
      <h2>Datos Usuario</h2>
      <p>{datos[0]?.name}</p>
    </>
  );
}

export default Prueba;
