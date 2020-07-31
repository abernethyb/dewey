import React, { useState, useEffect } from "react"
import ApiManager from '../../modules/ApiManager';
import "./Item.css"
import "./Library.css"



// let activeUserId = sessionStorage.getItem("credentials")
// let intActiveUserID = parseInt(activeUserId)
//parseInt(sessionStorage.getItem("credentials"))

const EditedItem = props => {
    const [item, setItem] = useState({ userId: parseInt(sessionStorage.getItem("credentials")), name: "", author: "", serial: "", isbn: "", makeOrPublisher: "", model: "", year: "", otherInfo: "", categoryId: "" });
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...item };
        stateToChange[event.target.id] = event.target.value;
        setItem(stateToChange);
    };


    const constructEditedItem = event => {
        event.preventDefault();


        setIsLoading(true);
        const ItemEdit = {
            userId: item.userId,
            name: item.name,
            author: item.author,
            available: item.available,
            serial: item.serial,
            isbn: item.isbn,
            makeOrPublisher: item.makeOrPublisher,
            model: item.model,
            year: parseInt(item.year),
            otherInfo: item.otherInfo,
            categoryId: parseInt(item.categoryId),
            id: props.match.params.itemId
        }


        ApiManager.editObject("items", ItemEdit)
            .then(() => props.history.push("/PersonalLibrary"));

    };

    useEffect(() => {
        ApiManager.getOne("items", props.match.params.itemId)
            .then(itemResponse => {

                ApiManager.getAll("categories",).then(catResponse => {
                    setCategories(catResponse);
                    setIsLoading(false);
                    setItem(itemResponse);
                    setIsLoading(false);
                })



            });
    }, []);

    return (
        <>
            <form className="edit--form">
                <fieldset>
                    <div classtitle="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            value={item.name}
                            placeholder="Item Name"
                        />
                        {/* <label htmlFor="title">name</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="author"
                            value={item.author}
                            placeholder="Author"
                        />
                        {/* <label htmlFor="title">author</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="serial"
                            value={item.serial}
                            placeholder="Item serial number"
                        />
                        {/* <label htmlFor="title">serial Number</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="isbn"
                            value={item.isbn}
                            placeholder="ISBN number"
                        />
                        {/* <label htmlFor="isbn">ISBN number</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="makeOrPublisher"
                            value={item.makeOrPublisher}
                            placeholder="Manufacturer/Publisher"
                        />
                        {/* <label htmlFor="makeOrPublisher">Manufacturer/Publisher</label> */}
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="model"
                            value={item.model}
                            placeholder="Item model"
                        />
                        {/* <label htmlFor="model">Model</label> */}
                        <input
                            type="number"
                            required
                            onChange={handleFieldChange}
                            id="year"
                            value={item.year}
                            placeholder="Year"
                        />
                        {/* <label htmlFor="year">Year manufactured/Printed</label> */}
                        <input
                            type="textarea"
                            required
                            onChange={handleFieldChange}
                            id="otherInfo"
                            value={item.otherInfo}
                            placeholder="Other"
                        />
                        {/* <label htmlFor="otherInfo">other information</label> */}
                        <select
                            className="form-control"
                            id="categoryId"
                            value={item.categoryId}
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
                            onClick={constructEditedItem}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default EditedItem