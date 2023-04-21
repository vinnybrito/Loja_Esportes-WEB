import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Acessorios from './Components/Acessorios';
import Camisas from './Components/Camisas'
import Calcas from './Components/Calcas'

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
    </div>
  );
}


