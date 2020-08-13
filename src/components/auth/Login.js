import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"
import "./Auth.css"

// "username": "Bob Doe",
// "email": "bob@email.com",
// "password": "probablymyPetsName",
// "city": "Nashville",
// "region": "Tennessee",
// "id": 1



const Login = props => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    // Update state whenever an input field is edited
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = (event) => {

        event.preventDefault();



        ApiManager.getAll("users").then((users) => {
            let badLogin = null
            let i = 1
            users.map((user) => {
                if (badLogin === false) {
                    return console.log("Login Sucessfull")
                } else {
                    console.log("Invalid Login, please try again", i)
                }
                badLogin ? console.log("badlogin is", badLogin) : console.log("badlogin is", badLogin)
                if (user.username === credentials.username && user.password === credentials.password) {
                    badLogin = false
                    props.setUser(user)
                    props.history.push("/");
                    console.log("userId", user.id)
                } else {
                    badLogin = true
                    i++
                    sessionStorage.clear()
                }
                if (badLogin === true && i-1 === users.length) {
                    console.log("testing", i)
                    console.log("users.length", users.length)
                    window.alert("Login unsucessful; please try again or register a new accound if you're a new user")
                }


            })


        })



    }

    return (
        <div className="login--container">
            <div className="login--form--container">
            <form onSubmit={handleLogin}>
                <fieldset>
                    <h1>Welcome to Dewey</h1>
                    <h3>Your Personal Public Library</h3>
                    <h3>Please sign in to continue</h3>
                    <div className="formgrid">
                        <input onChange={handleFieldChange} type="username"
                            id="username"
                            placeholder="username"
                            required="" autoFocus="" />
                        {/* <label htmlFor="inputUsername">Username</label> */}

                        <input onChange={handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        {/* <label htmlFor="inputPassword">Password</label> */}
                    </div>
                    <button type="submit">Sign in</button>
                    <button type="button" onClick={() => props.history.push(`/Registration`)}>Register New User</button>
                </fieldset>
            </form>
            </div>

        </div>

    );
};

export default Login;