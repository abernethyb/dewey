import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)
console.log(activeUserId)

const CheckoutList = (props) => {
    const [checkouts, setCheckouts] = useState([]);

    const getCheckouts = () => {
        return ApiManager.getTwoExpanded("checkouts", "user", "item").then(checkoutsFromAPI => {
            setCheckouts(checkoutsFromAPI)
        });
    };
    
    useEffect(() => {
        getCheckouts();    
    }, []);

  
    return (
        <>
            <div className="checkout--list">
                {checkouts.map(checkout => checkout.userId === intActiveUserID && <CheckoutCard key={checkout.id} checkout={checkout} {...props} />)}
            </div>
        </>
    );
};
export default CheckoutList