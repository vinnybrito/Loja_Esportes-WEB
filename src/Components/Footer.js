import '../index.css'
import '../Components/css/style.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    
    return(
        <footer id="footer">
            <div>
                <p className='p-footer'>
                    Vinicius Rodrigues Brito - RM: 97473
                </p>
                <p className='p-footer'>
                    Vinícius Almeida Kotchetkoff - RM: 96331
                </p>
            </div>
            <div className='footer-social'>
                <ul className='mediaSocial'>
                    <li>
                        <FaFacebook/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                    <li>
                        <FaTwitter/>
                    </li>
                </ul>
            </div>        
        </footer>
    )
}