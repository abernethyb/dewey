
import React from 'react';
import "./Item.css"



const LendingCard = (props) => {

    const coutDate = new Date(props.checkout.checkoutDate * 1000)
    //console.log(`${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`)
    const checkoutDate = `${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`

    const dDate = new Date(props.checkout.dueDate * 1000)
    // console.log(`${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`)
    const dueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`

    let description = null
    switch (props.checkout.item.categoryId) {
        case 1:
            description = props.checkout.item.otherInfo;
            break;
        case 2:
            description = `ISBN: ${props.checkout.item.isbn}`;
            break;
        case 3:
            description = `${props.checkout.item.makeOrPublisher}, ${props.checkout.item.year}`;
            break;
        default:
            description = "";
    }



    return (

        <div className="card">
            <div className="lending--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                {/* <p>By: {props.checkout.item.author}</p> */}
                <p>Borrower: {props.checkout.user.username} in {props.checkout.user.city}, {props.checkout.user.region} </p>
                <p>{description}</p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                <p>Checkout Date: {checkoutDate}</p>
                <p>Due Date: {dueDate}</p>
            </div>
        </div>
    );
};

export default LendingCard;