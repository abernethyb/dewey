import React from "react";



const CheckoutCard = (props) => {




    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                <p>By: {props.checkout.item.author}</p>
                {/* <p>Owner: {props.checkout.item.user.username}</p> */}

            </div>
        </div>
    );
};

export default CheckoutCard;