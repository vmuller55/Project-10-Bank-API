import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import editUser from "../../services/user"
import { profileActions } from "../../store/profile"
import { Link } from "react-router-dom"
import Account from "../../components/account/Account"


function User () {
    /**
     * Use selector to get states
     */
    const isAuth = useSelector((state) => state.auth.isAuth);
    const userData = useSelector((state) => state.profile);
    const token = useSelector((state) => state.token.token);
    /**
     * Use state to display form and get new name
     */
    const [displayForm, setDisplayForm] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const handleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };
    /**
     * Edit user, close form and dispatch modification
     */
    const handleForm = () => {
        if (firstName && lastName) {
        editUser(firstName, lastName, token);
        setDisplayForm(!displayForm);
        dispatch(profileActions.getNames({firstName : firstName, lastName : lastName}));
        }
    };

    return (
        <main className="main bg-dark"> 
            {isAuth? (
                <div>
                    {displayForm && (
                        <div className="header">
                            <h1>Welcome back</h1>
                            <div className="containeEditName">
                                <div className="editNameInput">
                                    <input type="text" placeholder={userData.firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    <input type="text" placeholder={userData.lastName} onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="buttonBox">
                                    <button onClick={handleForm}>Save</button>
                                    <button onClick={handleDisplayForm}>Cancel</button>
                                </div>
                            </div>
                    </div>
                    )}
                    {!displayForm && (
                        <div className="header">
                        <h1>Welcome back<br />{userData.firstName} {userData.lastName}</h1>
                        <button className="edit-button" onClick={handleDisplayForm}>Edit Name</button>
                    </div>
                    )}
                    <h2 className="sr-only">Accounts</h2>
                    <Account title='Argent Bank Checking (x8349)' amount="$2,082.79" description="Available Balance"/>
                    <Account title='Argent Bank Savings (x6712)' amount="$10,928.42" description="Available Balance"/>
                    <Account title='Argent Bank Credit Card (x8349)' amount="$184.30" description="Current Balance"/>
                </div>
            ) : 
            (
                <div>
                    <h2>You need to be login</h2>
                    <Link to={'/'}> HomePage </Link>
                </div>
            ) }
        </main>
        
    )
}

export default User