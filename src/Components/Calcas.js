import '../index.css'
import '../Components/css/style.css'
import imgConstrucao from './img/SiteContrucao.jpg'

export default function Calcas() {
    return(
        <div className='construcao'>
            <p className='pconst'>Página em construção</p>
            
            <img src={imgConstrucao} alt="Site em construcao" className='siteConstrucao'/>   
        </div>
    )
}