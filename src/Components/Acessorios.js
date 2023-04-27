import '../index.css'
import '../Components/css/style.css'
import imgConstrucao02 from './img/SiteConstrucao02.jpg'

export default function Acessorios() {
    return(
        <div>
            <div className='construcao'>
            <p className='pconst'>Página em construção</p>
            
            <img src={imgConstrucao02} alt="Site em construcao" className='siteConstrucao02'/>   
            </div>
        </div>
    )
}