import ApiManager from '../../modules/ApiManager';
import React, { useState, useEffect } from 'react';
import MessageCard from "./Messages"
import "./Item.css"


const CheckoutCard = (props) => {
    const [display, setDisplay] = useState("show--details");
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
    //console.log(`${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`)
    const checkoutDate = `${coutDate.getMonth() + 1}/${coutDate.getDate()}/${coutDate.getFullYear()}`

    const dDate = new Date(props.checkout.dueDate * 1000)
    // console.log(`${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`)
    const dueDate = `${dDate.getMonth() + 1}/${dDate.getDate()}/${dDate.getFullYear()}`

    let milDate = Date.now()
    //console.log(milDate)
    let secDate = Math.round(milDate / 1000)
    // console.log(secDate)

    const checkin = {
        userId: props.checkout.userId,
        itemId: props.checkout.itemId,
        checkoutDate: props.checkout.checkoutDate,
        dueDate: props.checkout.dueDate,
        checkinDate: secDate,
        checkedOut: false,
        declined: props.checkout.declined,
        hidden: true,
        id: props.checkout.id


    };

    const availableItem = {
        userId: props.checkout.item.userId,
        name: props.checkout.item.name,
        author: props.checkout.item.author,
        available: true,
        serial: props.checkout.item.serial,
        isbn: props.checkout.item.isbn,
        makeOrPublisher: props.checkout.item.makeOrPublisher,
        model: props.checkout.item.model,
        year: props.checkout.item.year,
        otherInfo: props.checkout.item.otherInfo,
        categoryId: props.checkout.item.categoryId,
        id: props.checkout.item.id
    }


    const hidden = {
        userId: props.checkout.userId,
        itemId: props.checkout.itemId,
        checkoutDate: props.checkout.checkoutDate,
        dueDate: props.checkout.dueDate,
        checkinDate: props.checkout.checkinDate,
        checkedOut: props.checkout.checkedOut,
        declined: props.checkout.declined,
        hidden: true,
        id: props.checkout.id


    };

    return (

        <div className="card">
            <div className={display}>
            {props.checkout.checkedOut ?
                <div className="checkout--card">
                    <div className="card--details">
                    <h2 className="item--name">{props.checkout.item.name}</h2>
                    <p>Owner: {owner.username} in {owner.city}, {owner.region} </p>
                    <p>Checkout Date: {checkoutDate}</p>
                    <p>Due Date: {dueDate}</p>
                    <p className="item--status">{props.checkout.checkedOut ? 'Checked Out' : 'Returned'}</p>
                    <button
                        type="button"
                        className="card--button"
                        onClick={() => props.checkin(checkin, availableItem)}>
                        Return
                    </button>
                    <button
                        type="button"
                        className="card--button"
                        onClick={() => setDisplay("show--messages")}
                    >
                        Show Messages
                    </button>
                    </div>
                    <div className="messages--import">
                        <MessageCard key={props.checkout.id} checkout={props.checkout} getItems={props.getItems} owner={owner} setDisplay={setDisplay} {...props} />
                    </div>
                </div>
                :
                <div className="checkout--card--unapproved">
                    <div className="card--details">
                    <h2 className="item--name">{props.checkout.item.name}</h2>
                    <p>Owner: {owner.username} in {owner.city}, {owner.region} </p>
                    <p className="item--status">{props.checkout.declined ? 'DECLINED' : 'Awaiting Owner Approval'}</p>
                    <button
                        disabled
                        type="button"
                        className="card--button"
                        onClick={() => props.checkin(checkin, availableItem)}>
                        Return
                    </button>
                    {props.checkout.declined ?
                        <button
                            type="button"
                            className="card--button"
                            onClick={() => props.hideCheckout(hidden)}>
                            Hide
                        </button>
                        :
                        <button
                            type="button"
                            className="card--button"
                            onClick={() => props.deleteCheckout(props.checkout.id, availableItem)}>
                            Cancel Request
                        </button>
                    }
                    <button
                        type="button"
                        className="card--button"
                        onClick={() => setDisplay("show--messages")}
                    >
                        Show Messages
                    </button>
                    </div>
                    <div className="messages--import">
                        <MessageCard key={props.checkout.id} checkout={props.checkout} getItems={props.getItems} owner={owner} setDisplay={setDisplay} {...props} />
                    </div>
                </div>
            }
            </div>
        </div>
    );
};

export default CheckoutCard;