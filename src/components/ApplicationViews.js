import { Route } from "react-router-dom";
import React from "react";
import ItemList from "./items/ItemList";
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
                path="/items"
                render={props => {
                    return <ItemList {...props} />;
                }}
            />
        </>
    );
};

export default ApplicationViews;