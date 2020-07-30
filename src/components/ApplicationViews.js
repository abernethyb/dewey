import { Route, Redirect } from "react-router-dom"
import React from "react";
import PublicLibrary from "./items/PublicLibrary";
import PersonalLibrary from "./items/PersonalLibrary";
import EditedItem from "./items/EditItem";
import NewItem from "./items/newItem";
import CheckoutList from "./items/CheckoutList";
import LendingList from "./items/LendingList";
import Login from "./auth/Login"
import Registration from "./auth/Registration"
import Home from "./home/Home"

const ApplicationViews = (props) => {

    const hasUser = props.hasUser;
    const setUser = props.setUser;


    return (
        <>
            <Route path="/login" render={props => {
                return <Login setUser={setUser} {...props} />
            }} />
            <Route path="/Registration" render={props => {
                return <Registration setUser={setUser} {...props} />
            }} />
            <Route
                exact
                path="/"
                render={props => {
                    if (hasUser) {
                        return <Home {...props} />;
                    } else {
                        return <Redirect to="/login" />
                    }

                }}
            />
            <Route
                exact
                path="/PublicLibrary"
                render={props => {
                    if (hasUser) {
                        return <PublicLibrary {...props} />;
                    } else {
                        return <Redirect to="/login" />
                    }

                }}
            />
            <Route
                exact
                path="/PersonalLibrary"
                render={props => {
                    if (hasUser) {
                        return <PersonalLibrary {...props} />;
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route
                path="/NewItem"
                render={props => {
                    if (hasUser) {
                        return <NewItem {...props} />;
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route path="/PersonalLibrary/:itemId(\d+)/edit" render={props => {
                if (hasUser) {
                    return <EditedItem {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                path="/Checkouts"
                render={props => {
                    if (hasUser) {
                    return <CheckoutList {...props} />;
                } else {
                    return <Redirect to="/login" />
                }
                }}
            />
            <Route
                path="/Lending"
                render={props => {
                    if (hasUser) {
                    return <LendingList {...props} />;
                } else {
                    return <Redirect to="/login" />
                }
                }}
            />
        </>
    );
};

export default ApplicationViews;