
import React from 'react';
import "./Item.css"



const LendingCard = (props) => {

    const coutDate = new Date(props.checkout.checkoutDate * 1000)
    //console.log(`${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`)
    const checkoutDate = `${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`

    const dDate = new Date(props.checkout.dueDate * 1000)
    // console.log(`${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`)
    const dueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`



    return (

        <div className="card">
            <div className="lending--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                <p>By: {props.checkout.item.author}</p>
                <p>Borrower: {props.checkout.user.username} in {props.checkout.user.city}, {props.checkout.user.region} </p>
                <p>Description: </p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                <p>Checkout Date: {checkoutDate}</p>
                <p>Due Date: {dueDate}</p>
            </div>
        </div>
    );
};

export default LendingCard;