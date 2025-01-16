/* Importaciones */
import Card, {CardBody} from "./components/Card";
import List from "./components/List";

/* Todas las app, por convención, usan la función App, la que debe ser exportada por defecto */

function App() {
  const list = [
    "Goku", "Tangiro", "Bulma" 
  ];
  return <Card>
    <CardBody title="Hola Mundo!" text="Este es el texto."/>
    <List data={list}/>
  </Card>
}

export default App; /* La experotación de la que se comentó en la primera línea */