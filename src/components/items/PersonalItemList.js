import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
const ItemList = (props) => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        return ApiManager.getByUserId("items", activeUserId, "user").then(itemsFromAPI => {
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
export default ItemList