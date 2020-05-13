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
                            <button onClick = {() => console.log('delete', contact.id)}>
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