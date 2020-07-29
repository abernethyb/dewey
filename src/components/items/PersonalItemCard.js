import React from "react";



const PersonalItemCard = (props) => {




    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <p>By: {props.item.author}</p>
                <p>{props.item.available ? 'available' : 'unavailable'}</p>
                <button
                    type="button"
                    className="card--button"
                    onClick={() => props.deleteItem(props.item.id)}>
                    Delete
                </button>

            </div>
        </div>
    );
};

export default PersonalItemCard;