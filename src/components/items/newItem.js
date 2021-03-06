import React, { useState, useEffect } from "react"
import ApiManager from '../../modules/ApiManager';
import "./Item.css"


const NewItem = props => {
    const [item, setItem] = useState({ userId: parseInt(sessionStorage.getItem("credentials")), name: "", author: "", available: true, serial: "", isbn: "", makeOrPublisher: "", model: "", year: "", otherInfo: "", categoryId: "" });
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...item };
        stateToChange[event.target.id] = event.target.value;
        setItem(stateToChange);
    };


    const constructNewItem = event => {
        event.preventDefault();
        if (item.name === "" || item.categoryId === "") {
            window.alert("Please input an item name and category");
        } else {
            setIsLoading(true);
            item.categoryId = parseInt(item.categoryId)
            if (item.year !== "") {
                item.year = parseInt(item.year)
            }
            ApiManager.addObject("items", item)
                .then(() => props.getItems().then(() => {
                    setIsLoading(false)
                }));
        }
    };
    useEffect(() => {

        ApiManager.getAll("categories",).then(response => {
            setCategories(response);
            setIsLoading(false);
        })


    }, []);


    return (
        <>
            <form>
                <fieldset>
                    <h3>Add a New Item</h3>
                    <div classtitle="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Item Name"
                        />
                        {/* <label htmlFor="title">name</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="author"
                            placeholder="Author"
                        />
                        {/* <label htmlFor="title">author</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="serial"
                            placeholder="Item serial number"
                        />
                        {/* <label htmlFor="title">serial Number</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="isbn"
                            placeholder="ISBN number"
                        />
                        {/* <label htmlFor="isbn">ISBN number</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="makeOrPublisher"
                            placeholder="Manufacturer/Publisher"
                        />
                        {/* <label htmlFor="makeOrPublisher">Manufacturer/Publisher</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="model"
                            placeholder="Item model"
                        />
                        {/* <label htmlFor="model">Model</label> */}
                        <input
                            type="number"
                            required
                            onChange={handleFieldChange}
                            id="year"
                            placeholder="Year"
                        />
                        {/* <label htmlFor="year">Year manufactured/Printed</label> */}
                        <input
                            type="textarea"
                            required
                            onChange={handleFieldChange}
                            id="otherInfo"
                            placeholder="Other"
                        />
                        {/* <label htmlFor="otherInfo">other information</label> */}

                        <select
                            className="form-control"
                            id="categoryId"
                            onChange={handleFieldChange}
                        >
                            <option value="" hidden defaultValue >Category</option>
                            {categories.map(category =>
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            )}
                        </select>

                        {/* <label htmlFor="categoryId">category</label> */}
                    </div>
                    <div classtitle="alignRight">
                        <button
                            type="button"
                            className="section--button"
                            disabled={isLoading}
                            onClick={constructNewItem}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default NewItem