import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ApiManager from '../../modules/ApiManager';
import "./Library.css"

// let activeUserId = sessionStorage.getItem("credentials")
// let intActiveUserID = parseInt(activeUserId)
//parseInt(sessionStorage.getItem("credentials"))

const PublicLibrary = (props) => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("")
    const [filteredItems, setFilteredItems] = useState([])

    const getItems = () => {
        return ApiManager.getEmbeddedWithTwoExpand("items", "checkouts", "user", "category").then(itemsFromAPI => {
            setItems(itemsFromAPI)
        });
    };

    
    useEffect(() => {
        getItems();    
    }, []);

    const postCheckout = (checkout, unavailable) => {
        ApiManager.addObject("checkouts", checkout).then( () => {
            ApiManager.editObject("items", unavailable).then( () => {
                props.history.push("./Checkouts")
            })
            
        }
        )
    }
    useEffect(() => {
        setFilteredItems(
            items.filter(item => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, items])


  
    return (
        <>
            <div className="item--list">
                <div className="library--title">
                    <h1>Public Library</h1>
                <div className="search">
                    <input type="text" placeholder="Search by Item Name" onChange={event => setSearch(event.target.value)}></input>
                    {console.log("filtered", filteredItems)}
                </div>
                </div>
                {filteredItems.map(item => parseInt(sessionStorage.getItem("credentials")) !== item.user.id && <ItemCard key={item.id} item={item} postCheckout={postCheckout} {...props} />)}
            </div>
        </>
    );
};
export default PublicLibrary