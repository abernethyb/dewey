import React from "react";
import "./Item.css"



const PersonalItemCard = (props) => {

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
            {props.item.available ?
            <div className="personal--card">
                <h2 className="item--name">{props.item.name}</h2>
                <h3>{props.item.category.name}</h3>
                <p>{description}</p>
                <p className="item--status">{props.item.available ? 'Available' : 'Unavailable'}</p>
                <button type="button"
                    onClick={() => props.history.push(`/PersonalLibrary/${props.item.id}/edit`)}>
                    Edit
                </button>
                <button
                    type="button"
                    className="card--button"
                    onClick={() => props.deleteItem(props.item.id)}>
                    Delete
                </button>

            </div>
            :
            <div className="personal--card--unavailable">
            <h2 className="item--name">{props.item.name}</h2>
            <h3>{props.item.category.name}</h3>
            <p>{description}</p>
            <p className="item--status">{unavailableStatus}</p>
            <button type="button"
                disabled
                onClick={() => props.history.push(`/PersonalLibrary/${props.item.id}/edit`)}>
                Edit
            </button>
            <button
                type="button"
                className="card--button"
                disabled
                onClick={() => props.deleteItem(props.item.id)}>
                Delete
            </button>

        </div>
            }
        </div>
    );
};

export default PersonalItemCard;