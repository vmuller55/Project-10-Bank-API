import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import login from "../../services/login";
import { tokenActions } from "../../store/token";
import { profileActions } from "../../store/profile";
import getToken from "../../services/token";

function Login ()  {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    /**
     * Use selector to get states
     */
    const token = useSelector((state) => state.token)
    const userProfile = useSelector((state) => state.profile)
    /**
     * UseStates to alert invalid input and to get input for login
     */
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    /**
     * 
     * @param {*} event 
     */
    const handleSubmit = async (event) => {
      event.preventDefault()
      /**
       * Get token and put it in a const
       */
      const dataToken = await getToken(email, password);
      /**
       * Check if status is ok 
       */
      if(dataToken.status === 200){
        dispatch(tokenActions.getToken(dataToken.body.token))
        if(token){;
          /**
           * Change auth state
           */
          dispatch(authActions.login())
          /**
           * Save user info
           */
          const dataUser = await login(dataToken.body.token);
          if(dataUser.status === 200){
            /**
             * Change profile state
             */
            dispatch(profileActions.getNames({firstName : dataUser.body.firstName, lastName : dataUser.body.lastName, id : dataUser.body.id}))
            if(userProfile){
              /**
               * Navigate to profile page
               */
              navigate(`/profile/${dataUser.body.id}`)
            }
            else{
              navigate("/*")
            }
          }
        }     
      }else{
        if(dataToken.message === "Error: User not found!"){
          setIsInvalidEmail(true)
        }
        if(dataToken.message === "Error: Password is invalid"){
          setIsInvalidPassword(true)
        }
      }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e)=> setUsername(e.target.value)}/>
                        {isInvalidEmail && <span className="error">Error: User not found!</span>}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
                        {isInvalidPassword && <span className="error">Error: Password is invalid</span>}
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
        
    )
}

export default Login