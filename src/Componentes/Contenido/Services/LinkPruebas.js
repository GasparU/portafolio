import axios from "axios";
// Con el axios podremos hacer peticiones a servidores externos, suele usarse para BackEnd. Con esto traeremos la lista de información desde mockAPI
// const URL = "https://631896a1f6b281877c70d081.mockapi.io/pruebas"
const URL = `${process.env.REACT_APP_API}pruebas`;

//este apunta a cargos, pero va a apuntar a editar pruebas, hay que cambiarlo posteriormente.

const LinkPruebas = async () => {
  try {
    const { data } = await axios.get(URL);
    return data; //Esto es como un resolve
  } catch (error) {
    throw error; // esto es como un reject
  }
};

export { LinkPruebas };
