import React, { useState, useEffect } from 'react';
import LendingCard from './LendingCard';
import ApiManager from '../../modules/ApiManager';

// let activeUserId = sessionStorage.getItem("credentials")
// let intActiveUserID = parseInt(activeUserId)

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

    const approveCheckout = (checkout) => {
        ApiManager.editObject("checkouts", checkout).then( () => {
            getItems(); 
            })
    }
    const declineCheckout = (decline, available) => {
        ApiManager.editObject("checkouts", decline).then( () => {
            ApiManager.editObject("items", available).then( () => {
                getItems(); 
            })
            
        }
        )
    }

  
    return (
        <>
            <div className="item--list">
            <h1 className="library--title">Requests</h1>
                {checkouts.map(checkout => checkout.item.userId === parseInt(sessionStorage.getItem("credentials")) && !checkout.checkedOut && !checkout.declined && <LendingCard key={checkout.id} checkout={checkout} approveCheckout={approveCheckout} declineCheckout={declineCheckout} {...props} />)}
            </div>
            <div className="item--list">
            <h1 className="library--title">Items You're Currently Lending</h1>
                {checkouts.map(checkout => checkout.item.userId === parseInt(sessionStorage.getItem("credentials")) && checkout.checkedOut && <LendingCard key={checkout.id} checkout={checkout} {...props} />)}
            </div>
        </>
    );
};
export default LendingList