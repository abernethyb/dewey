import React, { useState, useEffect } from 'react';
import PersonalItemCard from './PersonalItemCard';
import ApiManager from '../../modules/ApiManager';
import NewItem from "./newItem";

// let activeUserId = sessionStorage.getItem("credentials")
// let intActiveUserID = parseInt(activeUserId)
//parseInt(sessionStorage.getItem("credentials"))

const PersonalLibrary = (props) => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const [categories, setCategories] = useState([]);

    const getItems = () => {
        return ApiManager.getEmbededTwiceExpandedByUserId("items", parseInt(sessionStorage.getItem("credentials")), "checkouts", "user", "category").then(itemsFromAPI => {
            setItems(itemsFromAPI)
        });
    };

    const deleteItem = id => {
        ApiManager.deleteObject("items", id)
            .then(() => getItems());
    };

    useEffect(() => {
        getItems();
    }, [props.hasUser]);



    useEffect(() => {
        setFilteredItems(
            items.filter(item => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.categoryId === parseInt(search)
            })
        )
    }, [search, items])


    useEffect(() => {

        ApiManager.getAll("categories",).then(response => {
            setCategories(response);

        })


    }, []);








    return (
        <>
            <div className="item--list">
                <div className="library--top">
                    <h1>Your Library</h1>
                    <div className="search">
                        <input type="text" placeholder="Search by Item Name" onChange={event => setSearch(event.target.value)}></input>
                        <select
                            className="form-control"
                            id="categoryId"
                            onChange={event => setSearch(event.target.value)}
                        >
                            <option value="" hidden defaultValue >Category</option>
                            {categories.map(category =>
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            )}
                        </select>
                        {console.log("filtered", filteredItems)}
                    </div>
                </div>
                <div className="new--item">
                    {/* <button type="button"
                        className="section--button"
                        onClick={() => { props.history.push("/NewItem") }}>
                        New Item
                    </button> */}
                    <NewItem getItems={getItems} {...props} />
                </div>

                {filteredItems.map(item => <PersonalItemCard key={item.id} item={item} deleteItem={deleteItem} {...props} />)}
            </div>
        </>
    );
};
export default PersonalLibrary