import React, { useState, useEffect } from "react"
import ApiManager from '../../modules/ApiManager';



let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

const NewItem = props => {
    const [item, setItem] = useState({ userId: intActiveUserID, name: "", author: "", available: true, serial: "", isbn: "", makeOrPublisher: "", model: "", year: "", otherInfo: "", categoryId: "" });
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...item };
        stateToChange[event.target.id] = event.target.value;
        setItem(stateToChange);
    };


    const constructNewItem = event => {
        event.preventDefault();
        if (item.name === "") {
            window.alert("Please input an item name");
        } else {
            setIsLoading(true);
            item.categoryId = parseInt(item.categoryId)
            item.year = parseInt(item.year)
            ApiManager.addObject("items", item)
                .then(() => props.history.push("/PersonalLibrary"));
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
                    <div classtitle="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Item Name"
                        />
                        <label htmlFor="title">name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="author"
                            placeholder="Author"
                        />
                        <label htmlFor="title">author</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="serial"
                            placeholder="Item serial number"
                        />
                        <label htmlFor="title">serial Number</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="isbn"
                            placeholder="ISBN number"
                        />
                        <label htmlFor="isbn">ISBN number</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="makeOrPublisher"
                            placeholder="Manufacturer/Publisher"
                        />
                        <label htmlFor="makeOrPublisher">Manufacturer/Publisher</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="model"
                            placeholder="Item model"
                        />
                        <label htmlFor="model">Model</label>
                        <input
                            type="number"
                            required
                            onChange={handleFieldChange}
                            id="year"
                            placeholder="Year"
                        />
                        <label htmlFor="year">Year manufactured/Printed</label>
                        <input
                            type="textarea"
                            required
                            onChange={handleFieldChange}
                            id="otherInfo"
                            placeholder="Other"
                        />
                        <label htmlFor="otherInfo">other information</label>

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

                        <label htmlFor="categoryId">category</label>
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