import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Acessorios from './Components/Acessorios';
import Camisas from './Components/Camisas'
import Calcas from './Components/Calcas'
import {Button, Carousel} from 'react-bootstrap'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Camisas" element={<Camisas/>}/>
          <Route path="/Calcas" element={<Calcas/>}/>
          <Route path="/Acessorios" element={<Acessorios/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>

    <Button bgStyle="primary">Clique aqui</Button>
    </div>
  );
}


