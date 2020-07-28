import React from "react";



const ItemCard = (props) => {

    // "userId": 5,
    // "itemId": 4,
    // "checkoutDate": 1592179200,              
    // "dueDate": 1594929662,
    // "checkinDate": null,
    // "checkedOut": true,
    // "id": 1

    let milDate = Date.now()
    //console.log(milDate)
    let secDate = Math.round(milDate / 1000)
    // console.log(secDate)
    let dueDate = secDate + 2419200 
    //console.log(dueDate)

    const checkout = {
        userId: props.item.user.id,
        itemId: props.item.id,
        checkoutDate: secDate,
        dueDate: dueDate,
        checkinDate: null,
        checkedOut: true,


    };


    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <p>By: {props.item.author}</p>
                <p>{props.item.available ? 'available' : 'unavailable'}</p>
                <p>Owner: {props.item.user.username}</p>
                <button
                    type="button"
                    className="card--button"
                    onClick={() => props.createCheckout(checkout)}>
                        Checkout
                </button>

            </div>
        </div>
    );
};

export default ItemCard;