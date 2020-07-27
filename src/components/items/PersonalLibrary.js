import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

const PersonalLibrary = (props) => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        return ApiManager.getExpandedByUserId("items", intActiveUserID, "user").then(itemsFromAPI => {
            setItems(itemsFromAPI)
        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);

  
    return (
        <>
            <div className="item--list">
                {items.map(item =><ItemCard key={item.id} item={item} {...props} />)}
            </div>
        </>
    );
};
export default PersonalLibrary