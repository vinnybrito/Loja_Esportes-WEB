import {Link} from 'react-router-dom'
import '../index.css'
import '../Components/css/style.css'

export default function Nav() {

    return(
        <div id="menu-nav">
            <nav>
                <h1>
                    <Link to="/">Athletic Planet</Link>
                </h1>

                <ul>
                    <li>
                        <Link to="/Camisas">Camisas</Link>
                    </li>
                    <li>
                        <Link to="/Calcas">Calças</Link>
                    </li>
                    <li>
                        <Link to="/Acessorios">Acessórios</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}