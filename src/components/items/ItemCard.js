import React from "react";



const ItemCard = (props) => {




    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <p>{props.item.available ? 'available' : 'unavailable'}</p>

            </div>
        </div>
    );
};

export default ItemCard;