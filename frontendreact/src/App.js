import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Tabla de Películas</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<ComponenteMostrarPelicula />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;