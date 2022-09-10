import axios from "axios";
const mainUrl = 'http://localhost:3001/persons';


const getPhonebook = () => {

    const request = axios.get(mainUrl);
    return request.then(response => response.data)
}

const editNumber = (newObject, id) => {

    const request = axios.put(`${mainUrl}/${id}`, newObject)
    return request.then(response => response.data)
}


const saveNumber = newObject => {

    const request = axios.post(mainUrl, newObject)
    return request.then(response => response.data)
        //.then(response => response.data)
 
}

const deletePerson = (id) => {

        const request = axios.delete(`${mainUrl}/${id}` )
        return request.then(window.confirm("Are you sure you want to delete?"))
}

export  default {getPhonebook, saveNumber, editNumber, deletePerson}
