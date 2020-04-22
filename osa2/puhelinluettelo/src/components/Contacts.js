import React from 'react'

const Contacts = ({contactList}) => {
    //console.log('contactList :>> ', contactList);

    return(
        <div>
            {
                contactList.map((contact,i) => <div key ={i} > {contact.name} </div> )
            }
        </div>
    )
}

export default Contacts