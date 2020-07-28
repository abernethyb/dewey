import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ApiManager from '../../modules/ApiManager';

let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)
const CheckoutList = (props) => {
    const [checkouts, setCheckouts] = useState([]);
    //console.log(checkouts)
    // console.log(items)
    const getItems = () => {
        return ApiManager.getTwoExpanded("checkouts", "item", "user").then(itemsFromAPI => {
            setCheckouts(itemsFromAPI)
            // .then( () => {
            //     ApiManager.getOne("users", 4).then(response => {
            //         setOwner(response)
            //     })
            // })
        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);

  
    return (
        <>
            <div className="item--list">
                {checkouts.map(checkout => checkout.userId === intActiveUserID && checkout.checkedOut && <CheckoutCard key={checkout.id} checkout={checkout} {...props} />)}
            </div>
        </>
    );
};
export default CheckoutList