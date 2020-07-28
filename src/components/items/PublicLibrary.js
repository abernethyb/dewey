import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

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

    const postCheckout = (newObject) => {
        ApiManager.addObject("checkouts", newObject).then( () => {
            getItems()
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