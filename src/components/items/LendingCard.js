
import React from 'react';
import "./Item.css"



const LendingCard = (props) => {


    // let dateDue = null
    // props.item.checkouts.map(checkout => {
    //     checkout.checkedOut ? dateDue = checkout.dueDate : (console.log("no"))
    // })
    // const dDatedue = new Date(dateDue * 1000)
    // const humanDueDate = `${dDatedue.getMonth() + 1}/${dDatedue.getDate()}/${dDatedue.getFullYear()}`

    //console.log("checkouts", props.item.checkouts)


    let milDate = Date.now()
    //console.log(milDate)
    let secDate = Math.round(milDate / 1000)
    // console.log(secDate)
    let dueDateEntry = secDate + 2419200
    //console.log(dueDate)

    const coutDate = new Date(props.checkout.checkoutDate * 1000)
    //console.log(`${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`)
    const checkoutDate = `${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`

    const dDate = new Date(props.checkout.dueDate * 1000)
    // console.log(`${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`)
    const dueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`

    // let milDate = Date.now()
    // //console.log(milDate)
    // let secDate = Math.round(milDate / 1000)
    // // console.log(secDate)

    const approve = {
        userId: props.checkout.userId,
        itemId: props.checkout.itemId,
        checkoutDate: secDate,
        dueDate: dueDateEntry,
        checkinDate: "",
        checkedOut: true,
        declined: false,
        hidden: props.checkout.hidden,
        id: props.checkout.id


    };

    const decline = {
        userId: props.checkout.userId,
        itemId: props.checkout.itemId,
        checkoutDate: "",
        dueDate: "",
        checkinDate: "",
        checkedOut: false,
        declined: true,
        hidden: props.checkout.hidden,
        id: props.checkout.id


    };

    const availableItem = {
        userId: props.checkout.item.userId,
        name: props.checkout.item.name,
        author: props.checkout.item.author,
        available: true,
        serial: props.checkout.item.serial,
        isbn: props.checkout.item.isbn,
        makeOrPublisher: props.checkout.item.makeOrPublisher,
        model: props.checkout.item.model,
        year: props.checkout.item.year,
        otherInfo: props.checkout.item.otherInfo,
        categoryId: props.checkout.item.categoryId,
        id: props.checkout.item.id
    }

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
            {props.checkout.checkedOut ? 
            <div className="lending--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                {/* <p>By: {props.checkout.item.author}</p> */}
                <p>Borrower: {props.checkout.user.username} in {props.checkout.user.city}, {props.checkout.user.region} </p>
                <p>{description}</p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                <p>Checkout Date: {checkoutDate}</p>
                <p>Due Date: {dueDate}</p>
            </div>
            :
            <div className="request--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                {/* <p>By: {props.checkout.item.author}</p> */}
                <p>Borrower: {props.checkout.user.username} in {props.checkout.user.city}, {props.checkout.user.region} </p>
                <p>{description}</p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'Awaiting Your Approval'}</p>
                <button
                    type="button"
                    className="card--button"
                    // disabled={!props.item.available}
                    onClick={() => props.approveCheckout(approve)}
                    >
                    Approve
                </button>
                <button
                    type="button"
                    className="card--button"
                    // disabled={!props.item.available}
                    onClick={() => props.declineCheckout(decline, availableItem)}
                    >
                    Decline
                </button>
                
            </div>
            }
        </div>
    );
};

export default LendingCard;