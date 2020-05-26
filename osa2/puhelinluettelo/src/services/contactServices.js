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

const deleteContact = async (idToDelete) => {
    console.log('id to delete :>> ', idToDelete);
    const deleteSuccess = await axios.delete(`${baseUrl}/${idToDelete}`)
        .then(() => { return 0} )
        .catch( error => {
            console.log('error :>> ', error);
            return 1;
        })

    return getContacts().then(updatedContacts => {return {updatedContacts:updatedContacts, error: deleteSuccess}})
}

const updateContactNumber = async (nameToUpdate, newNumber) => {
    console.log('name to update :>> ', nameToUpdate);
    await getContacts().then(contacts => {
        const contactToFind = contacts.find(contact => contact.name === nameToUpdate);
        axios.patch(`${baseUrl}/${contactToFind.id}`, {number: newNumber});
    })

    return getContacts().then(updatedContacts => {return updatedContacts})
    //await axios.patch(`${baseUrl}/${idToUpdate}`, {number: newNumber});
    //return getContacts().then(updatedContacts => {return updatedContacts})
}

export default {getContacts, createContact, deleteContact, updateContactNumber}