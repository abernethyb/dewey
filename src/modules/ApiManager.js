const remoteURL = "http://localhost:5002"

//json-server -p 5002 -w example.json

export default {
    getSingleEmbedded(table, id, embed) {
        return fetch(`${remoteURL}/${table}/${id}?_embed=${embed}`)
            .then(result => result.json())
    },
    getAllEmbedded(table, embed) {
        return fetch(`${remoteURL}/${table}/?_embed=${embed}`)
            .then(result => result.json())
    },
    getExpanded(table, id, expand) {
        return fetch(`${remoteURL}/${table}/${id}?_expand=${expand}`).then(result => result.json())
    },
    getAll(table, expand) {
        return fetch(`${remoteURL}/${table}/?_expand=${expand}`).then(result => result.json())
    },
    getOne(table, id) {
        return fetch(`${remoteURL}/${table}/${id}`).then(result => result.json())
    },
    getTwoExpanded(table, expand, expandTwo) {
        return fetch(`${remoteURL}/${table}/?_expand=${expand}&_expand=${expandTwo}`).then(result => result.json())
    },
    getExpandedByUserId(table, id, expand) {
        return fetch(`${remoteURL}/${table}/?userId=${id}&_expand=${expand}`).then(result => result.json())
    },
    getEmbededTwiceExpandedByUserId(table, id, embed, expand, expandTwo) {
        return fetch(`${remoteURL}/${table}/?userId=${id}&_embed=${embed}&_expand=${expand}&_expand=${expandTwo}`).then(result => result.json())
    },
    getEmbeddedWithExpand(table, embed, expand) {
        return fetch(`${remoteURL}/${table}/?_embed=${embed}&_expand=${expand}`).then(result => result.json())
    },
    getEmbeddedWithTwoExpand(table, embed, expand, expandTwo) {
        return fetch(`${remoteURL}/${table}/?_embed=${embed}&_expand=${expand}&_expand=${expandTwo}`).then(result => result.json())
    },
    addObject(table, newObject) {
        return fetch(`${remoteURL}/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(result => result.json())
    },
    deleteObject(table, id) {
        return fetch(`${remoteURL}/${table}/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    editObject(table, editedObject) {
        return fetch(`${remoteURL}/${table}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(result => result.json());
    }

}
