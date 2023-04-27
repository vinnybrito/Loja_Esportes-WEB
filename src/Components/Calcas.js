import '../index.css'
import '../Components/css/style.css'
import imgConstrucao from './img/SiteContrucao.jpg'

export default function Calcas() {
    return(
        <div id='calcas'>
            <p>Página e construção</p>
            <div>
                <img src={imgConstrucao} alt="Site em construcao" className='siteConstrucao' />
            </div>
        </div>
    )
}