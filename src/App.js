import './App.css';
import './Styles/button.css'
import Button from './Components/Button';
import Contador from './Components/Contador';
import freeCodeCamp from './Img/Logo-Free.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Button
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
