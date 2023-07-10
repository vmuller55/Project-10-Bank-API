import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import editUser from "../../services/user"
import { profileActions } from "../../store/profile"

function User () {
    /**
     * Use selector to get states
     */
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
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default User