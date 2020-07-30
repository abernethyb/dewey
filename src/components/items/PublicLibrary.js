import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

const PublicLibrary = (props) => {
    const [items, setItems] = useState([]);

    const getItems = () => {
        return ApiManager.getTwoExpanded("items", "user", "category").then(itemsFromAPI => {
            setItems(itemsFromAPI)
        });
    };

    
    useEffect(() => {
        getItems();    
    }, []);

    const postCheckout = (checkout, unavailable) => {
        ApiManager.addObject("checkouts", checkout).then( () => {
            ApiManager.editObject("items", unavailable).then( () => {
                getItems()
            })
            
        }
        )
    }

  
    return (
        <>
            <div className="item--list">
                {items.map(item => intActiveUserID !== item.user.id && <ItemCard key={item.id} item={item} postCheckout={postCheckout} intActiveUserID={intActiveUserID} {...props} />)}
            </div>
        </>
    );
};
export default PublicLibrary