import React from "react";
import "./Item.css"



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
        userId: props.intActiveUserID,
        itemId: props.item.id,
        checkoutDate: secDate,
        dueDate: dueDate,
        checkinDate: null,
        checkedOut: true,


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
            description = props.item.otherInfo;
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
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <h3>{props.item.category.name}</h3>
                <p>{description}</p>
                <p>{props.item.available ? 'available' : 'unavailable'}</p>
                <p>Owned by {props.item.user.username} in  {props.item.user.city}, {props.item.user.region}</p>
                <button
                    type="button"
                    className="card--button"
                    disabled={!props.item.available}
                    onClick={() => props.postCheckout(checkout, unavailableItem) }>
                    Checkout
                </button>

            </div>
        </div>
    );
};

export default ItemCard;