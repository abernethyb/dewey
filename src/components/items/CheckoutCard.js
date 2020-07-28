import ApiManager from '../../modules/ApiManager';
import React, { useState, useEffect } from 'react';



const CheckoutCard = (props) => {
    const [owner, setOwner] = useState([]);
    const getOwner = () => {
        ApiManager.getOne("users", props.checkout.item.userId).then(response => {
            setOwner(response)
        })
    }
    useEffect(() => {
        getOwner();
    }, []);

    const coutDate = new Date(props.checkout.checkoutDate * 1000)
    console.log(`${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`)
    const checkoutDate = `${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`

    const dDate = new Date(props.checkout.dueDate * 1000)
    console.log(`${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`)
    const dueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`

    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.checkout.item.name}</h2>
                <p>By: {props.checkout.item.author}</p>
                <p>Owner: {owner.username} in {owner.city}, {owner.region} </p>
                <p>status: {props.checkout.checkedOut ? 'checked out' : 'returned'}</p>
                <p>Checkout Date: {checkoutDate}</p>
                <p>Due Date: {dueDate}</p>
                <p></p>


            </div>
        </div>
    );
};

export default CheckoutCard;