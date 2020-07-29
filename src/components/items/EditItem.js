import React, { useState, useEffect } from "react"
import ApiManager from '../../modules/ApiManager';



let activeUserId = sessionStorage.getItem("credentials")
let intActiveUserID = parseInt(activeUserId)

const EditedItem = props => {
    const [item, setItem] = useState({ userId: intActiveUserID, name: "", author: "", available: true, serial: "", isbn: "", makeOrPublisher: "", model: "", year: null, otherInfo: "", categoryId: null });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = event => {
        const stateToChange = { ...item };
        stateToChange[event.target.id] = event.target.value;
        setItem(stateToChange);
    };


    const constructEditedItem = event => {
        event.preventDefault();


        setIsLoading(true);
        item.categoryId = parseInt(item.categoryId)
        const ItemEdit = {
            userId: item.userId,
            name: item.name,
            author: item.author,
            available: item.available,
            serial: item.serial,
            isbn: item.isbn,
            makeOrPublisher: item.makeOrPublisher,
            model: item.model,
            year: item.year,
            otherInfo: item.otherInfo,
            categoryId: item.categoryId,
            id: props.match.params.itemId
        }


        ApiManager.editObject("items", item)
            .then(() => props.history.push("/PersonalLibrary"));

    };

    useEffect(() => {
        ApiManager.getOne("animals", props.match.params.itemId)
            .then(response => {
                setItem(response);
                setIsLoading(false);


            });
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
                            type="date"
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
                            type="dropdown"
                            id="categoryId"
                            onChange={handleFieldChange}>
                            <option value="" hidden defaultValue >Category</option>
                            <option value="1" >Book</option>
                            <option value="2" >Tool</option>
                        </select>
                        <label htmlFor="categoryId">category</label>
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