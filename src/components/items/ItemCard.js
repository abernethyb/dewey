import React from "react";
import "./Item.css"



const ItemCard = (props) => {

    let dateDue = null
    props.item.checkouts.map(checkout => {
        checkout.checkedOut ? dateDue = checkout.dueDate : (console.log("no"))
    })
    const dDate = new Date(dateDue * 1000)
    const humanDueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`

    let unavailableStatus = ""
    props.item.checkouts.map(checkout => {
        checkout.checkedOut ? unavailableStatus = `Unavailable. Due On ${humanDueDate}` : unavailableStatus = "Awaiting Owner Approval" 
    })


    let milDate = Date.now()
    //console.log(milDate)
    let secDate = Math.round(milDate / 1000)
    // console.log(secDate)
    let dueDate = secDate + 2419200
    //console.log(dueDate)

    const checkout = {
        userId: parseInt(sessionStorage.getItem("credentials")),
        itemId: props.item.id,
        checkoutDate: "",
        dueDate: "",
        checkinDate: "",
        checkedOut: false,
        declined: false,
        hidden: false


    };

    const unavailableItem = {
        userId: props.item.userId,
        name: props.item.name,
        author: props.item.author,
        available: false,
        serial: props.item.serial,
        isbn: props.item.isbn,
        makeOrPublisher: props.item.makeOrPublisher,
        model: props.item.model,
        year: props.item.year,
        otherInfo: props.item.otherInfo,
        categoryId: props.item.categoryId,
        id: props.item.id
    }
    let description = null
    switch (props.item.categoryId) {
        case 1:
            description = `${props.item.makeOrPublisher}, ${props.item.otherInfo}`;
            break;
        case 2:
            description = `By ${props.item.author}`;
            break;
        case 3:
            description = `${props.item.makeOrPublisher}, ${props.item.year}`;
            break;
        default:
            description = "";
    }



    return (

        <div className="card">
            {props.item.available ?
                <div className="item--card">
                    <h2 className="item--name">{props.item.name}</h2>
                    <h3>{props.item.category.name}</h3>
                    <p>{description}</p>  
                    <p>Owner: {props.item.user.username} in  {props.item.user.city}, {props.item.user.region}</p>
                    <p className="item--status">{props.item.available ? `Available` : `Unavailable. Due on: ${humanDueDate}`}</p>
                    <button
                        type="button"
                        className="card--button"
                        disabled={!props.item.available}
                        onClick={() => props.postCheckout(checkout, unavailableItem)}>
                        Request Checkout
                    </button>

                </div>
                :
                <div className="item--card--unavailable">
                    {console.log("checked out?", props.item.checkouts.checkedOut)}
                    <h2 className="item--name">{props.item.name}</h2>
                    <h3>{props.item.category.name}</h3>
                    <p>{description}</p>
                    <p>Owner: {props.item.user.username} in  {props.item.user.city}, {props.item.user.region}</p>
                    <p className="item--status">{unavailableStatus}</p>
                    <button
                        type="button"
                        className="card--button"
                        disabled={!props.item.available}
                        onClick={() => props.postCheckout(checkout, unavailableItem)}>
                        Request Checkout
                    </button>

                </div>

            }
        </div>
    );
};

export default ItemCard;