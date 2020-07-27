import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)
console.log(activeUserId)

const CheckoutList = (props) => {
    const [items, setItems] = useState([]);
    //const [checkouts, setCheckouts] = useState([]);
    //console.log(checkouts)
    console.log(items)
    const getItems = () => {
        return ApiManager.getEmbeddedWithExpand("items", "checkouts", "user").then(itemsFromAPI => {
            
            setItems(itemsFromAPI)
            //setCheckouts(itemsFromAPI.checkouts)
        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);

  
    return (
        <>
            <div className="item--list">
                {items.map(item => !item.available && <CheckoutCard key={item.id} item={item} dueDate={item.checkouts.map(checkout => checkout.dueDate)} {...props} />)}
            </div>
        </>
    );
};
export default CheckoutList