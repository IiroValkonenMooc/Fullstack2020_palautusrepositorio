import axios from 'axios'
const baseUrl = '/api/persons'

const getContacts = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

const createContact = (newnName, newNumber) => {
    const retVal = getContacts().then(contacts => {
        const findResult = contacts.map(contact => contact.name).findIndex(name => name === newnName);
        console.log('findResult :>> ', findResult);

        return findResult
        
    }).then( async findResult => {
        if (findResult === -1) {
            const err = await axios.post(baseUrl, { name: newnName, number: newNumber })
            .catch(error => {
                return {code:-1,error: error.response.data}
            })
            if(err.code === -1){
                return err
            }else{
                return 0;
            }
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

const updateContactNumber =  (nameToUpdate, newNumber) => {
    return getContacts().then( contacts => {
        const contactToUpdate = contacts.find(contact => contact.name === nameToUpdate);
        console.log('found contact :>> ', contactToUpdate);
        return contactToUpdate
    }).then( contactToUpdate => {
        axios.put(`${baseUrl}/${contactToUpdate.id}`, {name:nameToUpdate ,number: newNumber});
    }).then( () => getContacts()/*.then(updatedContacts => {return updatedContacts} )*/ )
}

export default {getContacts, createContact, deleteContact, updateContactNumber}