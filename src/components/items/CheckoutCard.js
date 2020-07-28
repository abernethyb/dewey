import React from "react";
import CheckoutList from "./CheckoutList";
import ApiManager from '../../modules/ApiManager';
import React, { useState, useEffect } from 'react';



const CheckoutCard = (props) => {
    const [owner, setOwner] = useState([]);
     ApiManager.getOne("users", props.checkout.userId).then(response => {
         setOwner(response)
     })
    
    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.checkout.item.id}</h2>
                <p>By: {props.checkout.item.author}</p>
                <p>Owner: {props.checkout.userId}</p>
                {/* {console.log("checkouts", props.checkouts.id)} */}
                {/* <p>{props.dueDate}</p> */}
                

            </div>
        </div>
    );
};

export default CheckoutCard;