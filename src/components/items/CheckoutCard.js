//import React from "react";
import CheckoutList from "./CheckoutList";
import ApiManager from '../../modules/ApiManager';
import React, { useState, useEffect } from 'react';



const CheckoutCard = (props) => {
    const [owner, setOwner] = useState([]);
    const getOwner = () => {
        ApiManager.getOne("users", props.checkout.item.userId).then(response => {
            setOwner(response)
        })
    }
    useEffect(() => {
        getOwner();
    }, []);

    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                <p>By: {props.checkout.item.author}</p>
                <p>Owner: {owner.username}</p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                {/* {console.log("checkouts", props.checkouts.id)} */}
                {/* <p>{props.dueDate}</p> */}


            </div>
        </div>
    );
};

export default CheckoutCard;