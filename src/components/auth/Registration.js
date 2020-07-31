
import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

// "username": "Bob Doe",
// "email": "bob@email.com",
// "password": "probablymyPetsName",
// "city": "Nashville",
// "region": "Tennessee",
// "id": 1

const Registration = props => {
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "", city: "", region: "" });
    const [isLoading, setIsLoading] = useState(false);
    
    let passwordConf = ""
    const setPasswordConf = (event) => {
        passwordConf = event.target.value
        console.log("passwordConf", passwordConf)
        return passwordConf
    }
    

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newUser };
        stateToChange[evt.target.id] = evt.target.value;
        setNewUser(stateToChange);
    };
    const constructNewUser = evt => {
        evt.preventDefault();
        if (newUser.username === "" || newUser.email === "" || newUser.password === "" || newUser.city === "" || newUser.region === "") {
            window.alert("Please fill out all fields");
        } else {
            setIsLoading(true);
            
            let duplicateUser = false
            ApiManager.getAll("users").then((users) => {

                users.map((user) => {
                    console.log("Registration db response", user.username, user.password)
                    console.log("Registration credentials", newUser.username, newUser.email)
                    if (user.username === newUser.username) {
                        console.log("unavailable")
                        window.alert("Sorry, that username is already in use.  Try another.");
                        console.log("newuser.username:", newUser.username, "user.username:", user.username)
                        duplicateUser = true
                        console.log("duplicateUser", duplicateUser)
                        return duplicateUser

                    } else if (user.email === newUser.email) {
                        console.log("unavailable")
                        window.alert("Sorry, that email is already in use.  Already a user?  Try logging in.");
                        console.log("newuser.username:", newUser.username, "user.username:", user.username)
                        duplicateUser = true
                        console.log("duplicateUser", duplicateUser)
                        return duplicateUser

                    } else if (user.username !== newUser.username || user.email !== newUser.email) {
                        console.log("user info is available!")
                    }

                })
                if (duplicateUser === false && newUser.password === passwordConf) {
                    ApiManager.addObject("users", newUser)
                        .then((response) => {
                            console.log("added user")
                            props.setUser(response)
                            props.history.push("/");
                        })
                }else if (newUser.password !== passwordConf) {
                    window.alert("Password and confirmation password did not match.  Please try again.");
                    console.log("this shouldn't post to db")
                } else {
                    console.log("this shouldn't post to db")
                }
                setIsLoading(false)
            })

            

        }
    };

    return (
        <form onSubmit={handleFieldChange}>
            <fieldset>
                <h2>New to Dewey?</h2>
                <h3>Sign up Below:</h3>
                <div className="formgrid">
                    <input
                        onChange={handleFieldChange}
                        type="username"
                        id="username"
                        placeholder="username"
                        required />
                    {/* <label htmlFor="username">Username</label> */}

                    <input 
                        onChange={handleFieldChange} 
                        type="email"
                        id="email"
                        placeholder="email"
                        required="" autoFocus="" />
                    {/* <label htmlFor="email">Email</label> */}
                    <input 
                        onChange={handleFieldChange} 
                        type="text"
                        id="city"
                        placeholder="city"
                        required="" autoFocus="" />
                    {/* <label htmlFor="city">City</label> */}
                    {/* <input 
                        onChange={handleFieldChange} 
                        type="text"
                        id="city"
                        placeholder="city"
                        required="" autoFocus="" />
                    <label htmlFor="city">City</label> */}
                    <input 
                        onChange={handleFieldChange} 
                        type="text"
                        id="region"
                        placeholder="State/Region"
                        required="" autoFocus="" />
                    {/* <label htmlFor="region">State/Region</label> */}

                    <input onChange={handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    {/* <label htmlFor="password">Password</label> */}
                    <input onChange={setPasswordConf} type="password"
                        id="passwordConf"
                        placeholder="Re-enter Password"
                        required="" />
                    {/* <label htmlFor="passwordConf">Re-enter Password</label> */}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    onClick={constructNewUser}

                >Sign up
                </button>
            </fieldset>
        </form>
    );
};

export default Registration;