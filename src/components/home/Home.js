import React from "react";
import PublicLibrary from "../items/PublicLibrary";
import PersonalLibrary from "../items/PersonalLibrary";
import EditedItem from "../items/EditItem";
//import NewItem from "./items/newItem";
import CheckoutList from "../items/CheckoutList";
import LendingList from "../items/LendingList";



        // <h1>Welcome to Dewey!</h1>
        // <h3>Your Personal Public Library</h3>

const Home = (props) => {

    return (
        <>
            <div className="home--container">
                <div className="home--list--container">
                    <div className="home--library--list">
                        <CheckoutList {...props} />
                    </div>
                    <div className="home--library--list">
                        <LendingList {...props} />
                    </div>
                    <div className="home--library--list">
                        <PersonalLibrary {...props} />
                    </div>
                    <div className="home--library--list">
                        <PublicLibrary {...props} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home