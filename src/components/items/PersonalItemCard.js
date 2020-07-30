import React from "react";
import "./Item.css"



const PersonalItemCard = (props) => {

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
                <p>{description}</p>
                <h3>{props.item.available ? 'Available' : 'Unavailable'}</h3>
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
            <p>{description}</p>
            <h3>{props.item.available ? 'Available' : 'Unavailable'}</h3>
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