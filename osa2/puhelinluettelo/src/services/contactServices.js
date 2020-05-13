import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getContacts = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

const createContact = (newnName, newNumber) => {
    const retVal = getContacts().then(contacts => {
        const findResult = contacts.map(contact => contact.name).findIndex(name => name === newnName);
        console.log('findResult :>> ', findResult);
        if (findResult === -1) {
            axios.post(baseUrl, { name: newnName, number: newNumber });
            return 0;
        } else {
            return 1;
        }
    })

    return retVal;
}

const deleteContact = (id) => {
    console.log(axios.delete(baseUrl, id)); 

}

export default {getContacts, createContact, deleteContact}