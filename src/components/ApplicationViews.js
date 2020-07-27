import { Route } from "react-router-dom";
import React from "react";
import ItemList from "./items/ItemList";
import PersonalItemList from "./items/PersonalItemList";
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
                    return <ItemList {...props} />;
                }}
            />
            <Route
                path="/PersonalLibrary"
                render={props => {
                    return <PersonalItemList {...props} />;
                }}
            />
        </>
    );
};

export default ApplicationViews;