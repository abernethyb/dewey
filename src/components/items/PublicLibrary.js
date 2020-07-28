import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)
console.log(activeUserId)

const PublicLibrary = (props) => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        return ApiManager.getAll("items", "user").then(itemsFromAPI => {
            setItems(itemsFromAPI)
        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);

  
    return (
        <>
            <div className="item--list">
                {items.map(item => intActiveUserID !== item.user.id && <ItemCard key={item.id} item={item} {...props} />)}
            </div>
        </>
    );
};
export default PublicLibrary