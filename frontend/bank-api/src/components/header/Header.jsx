import Logo from '../../assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { tokenActions } from '../../store/token'
import { authActions } from '../../store/auth'


function Header () {
    const navigate = useNavigate();
    /**
    * Use selector to get states
     */
    const isAuth = useSelector((state) => state.auth.isAuth)   
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault()
        /**
         * reset token state and auth state
         */
        dispatch(tokenActions.dropToken())
        dispatch(authActions.logout())
        navigate("/")
    }  
    return (
        <nav className="main-nav">
            <Link to={'/'}>
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isAuth? (
                    <div>
                        <Link to={`/profile/${profile.id}`}><div className="btn"> {profile.firstName} </div> </Link>
                        <Link to={"/"} className="btn" onClick={handleLogout}><i className="fa fa-sign-out"></i> Logout</Link>
                    </div>
                ) :
                (
                    <Link to={'/login'}><i className="fa fa-user-circle"></i>Sign In</Link>
                )}
            </div>
        </nav>
    )
}

export default Header