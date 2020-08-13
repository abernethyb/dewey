import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ApiManager from '../../modules/ApiManager';


const CheckoutList = (props) => {
    const [checkouts, setCheckouts] = useState([]);
   
    const getItems = () => {
        return ApiManager.getEmbeddedWithTwoExpand("checkouts", "messages", "item", "user").then(itemsFromAPI => {
            setCheckouts(itemsFromAPI)
        });
    };
    
    useEffect(() => {
        getItems();    
    }, []);

    const checkin = (checkin, available) => {
        ApiManager.editObject("checkouts", checkin).then( () => {
            ApiManager.editObject("items", available).then( () => {
                getItems()
            })
            
        }
        )
    }

    const deleteCheckout = (id, available) => {
        ApiManager.deleteObject("checkouts", id).then(() => {
            ApiManager.editObject("items", available).then(() => {
                getItems()
            })
            
        }
            )};

    const hideCheckout = (hidden) => {
        ApiManager.editObject("checkouts", hidden).then(() => {
            getItems()
        })
    }



  
    return (
        <>
            <div className="item--list">
            <h1 className="library--title">Items You're Currently Borrowing</h1>
                {checkouts.map(checkout => checkout.userId === parseInt(sessionStorage.getItem("credentials")) && checkout.checkinDate === "" && !checkout.hidden && <CheckoutCard key={checkout.id} checkout={checkout} checkin={checkin} deleteCheckout={deleteCheckout} hideCheckout={hideCheckout} getItems={getItems} {...props} />)}
            </div>
        </>
    );
};
export default CheckoutList