import React, { useState, useEffect } from 'react';
import CheckoutCard from './CheckoutCard';
import ApiManager from '../../modules/ApiManager';

// let activeUserId = sessionStorage.getItem("credentials")
// let intActiveUserID = parseInt(activeUserId)
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




// && checkout.checkedOut &&
// && checkout.checkinDate &&
// && !checkout.hidden
  
    return (
        <>
            <div className="item--list">
            <h1 className="library--title">Items You're Currently Borrowing</h1>
                {checkouts.map(checkout => checkout.userId === parseInt(sessionStorage.getItem("credentials")) && checkout.checkinDate === "" && !checkout.hidden && <CheckoutCard key={checkout.id} checkout={checkout} checkin={checkin} deleteCheckout={deleteCheckout} hideCheckout={hideCheckout} {...props} />)}
            </div>
        </>
    );
};
export default CheckoutList