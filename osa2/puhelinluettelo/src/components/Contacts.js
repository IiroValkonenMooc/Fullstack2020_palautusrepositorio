import React from 'react'

const Contacts = ({contactList, filter, deleteService}) => {
    //console.log('contactList :>> ', contactList);
    const contactListFiltered = contactList.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )

    return(
        <div>
            {
                contactListFiltered.map((contact, i) => {
                    return (
                        <div key={contact.name}>
                            {contact.name +' '+ contact.number} 
                            <button onClick = {() => {
                                    const result = window.confirm(`Do you really want to delete ${contact.name}`);
                                    if(result){
                                        deleteService(contact.id);
                                    }
                                } }>
                                delete
                            </button>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Contacts