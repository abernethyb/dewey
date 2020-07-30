
import React from 'react';



const LendingCard = (props) => {



    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                <p>By: {props.checkout.item.author}</p>
                <p>Borrower: {props.checkout.user.username} in {props.checkout.user.city}, {props.checkout.user.region} </p>
                <p>Description: </p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                <p>Checkout Date: {props.checkout.checkoutDate}</p>
                <p>Due Date: {props.checkout.dueDate}</p>
            </div>
        </div>
    );
};

export default LendingCard;