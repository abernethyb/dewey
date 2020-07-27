import React, { useState } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"

const Dewey = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", user.id);
    sessionStorage.setItem("username", user.username)
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
    
      return (
          <>
            <NavBar hasUser={hasUser} clearUser={clearUser} />
            < ApplicationViews hasUser={hasUser} setUser={setUser} />
          </>
      )
  }
  
  export default Dewey