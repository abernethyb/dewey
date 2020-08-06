
import React, { useState, useEffect } from "react"
import ApiManager from '../../modules/ApiManager';
import "./Item.css"

// "userId": 3,
// "checkoutId": 11,
// "date": 1599071763,
// "content": "Hi, I'd like to check this item out.",
// "id": 1

const MessageCard = (props) => {
    let milDate = Date.now()
    let secDate = Math.round(milDate / 1000)

    const [message, setMessage] = useState({ userId: parseInt(sessionStorage.getItem("credentials")), checkoutId: props.checkout.id, date: secDate, content: "" });
    const [isLoading, setIsLoading] = useState(false);


    const messages = props.checkout.messages.map(message => {
        return message.userId === props.checkout.userId ? (props.owner ? <p>You: {message.content}</p> : <p>{props.checkout.user.username}: {message.content}</p>) : (props.owner ? <p> {props.owner.username}: {message.content}</p> : <p>You: {message.content}</p>)
    })

    const handleFieldChange = event => {
        const stateToChange = { ...message };
        stateToChange[event.target.id] = event.target.value;
        setMessage(stateToChange);
    };

    const constructNewMessage = event => {
        event.preventDefault();
        if (message.content === "" ) {
            window.alert("no message content");
        } else {
            setIsLoading(true);
            ApiManager.addObject("messages", message)
                .then(() => props.getItems().then(() => {
                    setIsLoading(false)
                }));
        }
    };





    return (

        <div className="card">


            <div className="messages">
                <div className="message--content">{messages}</div>
                <fieldset>
                <div classtitle="formgrid">
                    <input
                        type="textarea"
                        // required
                        onChange={handleFieldChange}
                        id="content"
                        placeholder="Type New Message"
                    />
                    <button
                        type="button"
                        className="section--button"
                    disabled={isLoading}
                    onClick={constructNewMessage}
                    >Send Message</button>
                    </div>
                </fieldset>
                <button
                        type="button"
                        className="card--button"
                        onClick={() => props.setDisplay("show--details")}
                    >
                        Show Details
                    </button>
            </div>


        </div>
    );
};

export default MessageCard;