import { Route } from "react-router-dom";
import React from "react";
import ItemList from "./items/ItemList";

const ApplicationViews = (props) => {
    return (
        <>
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