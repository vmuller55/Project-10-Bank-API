import Logo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'


function Header () {
    return (
        <nav class="main-nav">
            <Link to={'/'}>
                <img class="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
                <h1 class="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to={'/login'}>
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header