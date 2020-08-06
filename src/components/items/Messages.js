import React from 'react';
import "./Item.css"



const MessageCard = (props) => {

    const messages = props.checkout.messages.map(message => {
        return message.userId === props.checkout.userId ? <p>{props.checkout.user.username}: {message.content}</p> : <p>You: {message.content}</p>
    })

    // const handleFieldChange = event => {
    //     const stateToChange = { ...item };
    //     stateToChange[event.target.id] = event.target.value;
    //     setItem(stateToChange);
    // };

    let milDate = Date.now()
    //console.log(milDate)
    let secDate = Math.round(milDate / 1000)
    // console.log(secDate)





    return (

        <div className="card">


            <div className="messages">
                <div className="message--content">{messages}</div>
                <input
                    type="textarea"
                    required
                    //onChange={handleFieldChange}
                    id="otherInfo"
                    placeholder="Type New Message"
                />
                <button
                    type="button"
                    className="section--button"
                //disabled={isLoading}
                //onClick={constructNewItem}
                >Send Message</button>
            </div>


        </div>
    );
};

export default MessageCard;