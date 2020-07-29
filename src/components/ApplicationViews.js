import { Route } from "react-router-dom";
import React from "react";
import PublicLibrary from "./items/PublicLibrary";
import PersonalLibrary from "./items/PersonalLibrary";
import EditedItem from "./items/EditItem";
import NewItem from "./items/newItem";
import CheckoutList from "./items/CheckoutList";
import Login from "./auth/Login"

const ApplicationViews = (props) => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />
            <Route
                exact
                path="/PublicLibrary"
                render={props => {
                    return <PublicLibrary {...props} />;
                }}
            />
            <Route
                path="/PersonalLibrary"
                render={props => {
                    return <PersonalLibrary {...props} />;
                }}
            />
            <Route
                path="/NewItem"
                render={props => {
                    return <NewItem {...props} />;
                }}
            />
            <Route path="/PersonalLibrary/:itemId(\d+)/edit" render={props => {
                
                    return <EditedItem {...props} />

            }} />
            <Route
                path="/Checkouts"
                render={props => {
                    return <CheckoutList {...props} />;
                }}
            />
        </>
    );
};

export default ApplicationViews;