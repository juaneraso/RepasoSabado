import { useEffect, useState } from "react";

function Prueba() {
  const [numero, setNumero] = useState(0);
  const [datos, setDatos] = useState([]);
  const [usuario, setUsuario] = useState("");

  //VARIABLE DE SU BACKEND
  const BACK = import.meta.env.VITE_APP_BACK;

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const respuesta = await fetch(BACK);

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

  console.log("UsuarioPrueba:", datos[0]?.first_name);
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
      <h3>{datos[2]?.first_name}</h3>
      <h4>{datos[2]?.family_name}</h4>
      {/* <label>Usuario:</label>
      <h4>{usuario}</h4> */}
    </>
  );
}

export default Prueba;
