import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
   <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/home' element={ <Home />} />
              <Route path='/categorias' element={<ListaCategoria />} />
            <Route path='/cadastroCategoria' element={<FormularioCategoria />} />
            <Route path='/deletarCategoria/:id' element={<DeletarCategoria/>} />
            <Route path='/editarCategory/:id' element={<FormularioCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;