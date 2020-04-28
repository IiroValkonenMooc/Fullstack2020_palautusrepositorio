import React from 'react'

const Contacts = ({contactList, filter}) => {
    //console.log('contactList :>> ', contactList);
    contactList = contactList.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()) )

    return(
        <div>
            {
                contactList.map((contact, i) => {
                    return (
                        <div key={contact.name}>
                            {contact.name +' '+ contact.number}
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Contacts