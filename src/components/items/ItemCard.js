import React from "react";



const ItemCard = (props) => {




    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <p>By: {props.item.author}</p>
                <p>{props.item.available ? 'available' : 'unavailable'}</p>
                <p>Owner: {props.item.user.username}</p>

            </div>
        </div>
    );
};

export default ItemCard;