import React, { useState, useEffect } from 'react';
import LendingCard from './LendingCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

const LendingList = (props) => {
    const [checkouts, setCheckouts] = useState([]);

    const getItems = () => {
        return ApiManager.getTwoExpanded("checkouts", "item", "user").then(itemsFromAPI => {
            setCheckouts(itemsFromAPI)

        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);



  
    return (
        <>
            <div className="item--list">
                {checkouts.map(checkout => checkout.item.userId === intActiveUserID && checkout.checkedOut && <LendingCard key={checkout.id} checkout={checkout} {...props} />)}
            </div>
        </>
    );
};
export default LendingList