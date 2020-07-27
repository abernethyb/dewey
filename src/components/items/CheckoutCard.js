import React from "react";



const CheckoutCard = (props) => {




    return (

        <div className="card">
            <div className="item--card">
                <h2 className="item--name">{props.item.name}</h2>
                <p>By: {props.item.author}</p>
                <p>Owner: {props.item.user.username}</p>
                <p>{props.dueDate}</p>
                {/* <p>hello {props.checkout.userId}</p> */}
                {/* {props.checkout.checkedOut == true ? console.log("duedate", props.checkout.userId) : console.log("no") }
                {console.log("checkout", props.checkout)} */}
                {console.log(props.dueDate)}

            </div>
        </div>
    );
};

export default CheckoutCard;