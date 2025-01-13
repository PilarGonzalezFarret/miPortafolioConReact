/* Importaciones */
import {CardBody} from "./components/Card";

/* Todas las app, por convención, usan la función App, la que debe ser exportada por defecto */

function App() {
  return <CardBody title ={"hola mundo"} text={"El texto del componente"}></CardBody>;
}

export default App; /* La experotación de la que se comentó en la primera línea */