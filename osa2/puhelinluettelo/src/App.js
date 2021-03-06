import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'
import contactService from './services/contactServices'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState(
    [
      // { name: 'Arto Hellas', number: '040-123456' },
      // { name: 'Ada Lovelace', number: '39-44-5323523' },
      // { name: 'Dan Abramov', number: '12-43-234345' },
      // { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]
  ) 

  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setnewNumber ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)
  const [ redErrorText, setRedErrorText] = useState(false)

  const hook = () => {
    console.log('Effect');
    contactService.getContacts()
      .then(contacts => setPersons(contacts) );
  }

  useEffect( hook ,[] )

  const changeMessage = async(text, redText) => {
    console.log('Error message display');
    if(redText){ setRedErrorText(true) }
    setErrorMessage(text);
    setTimeout(() => {
      setErrorMessage(null)
    }, 1200);
    if( redErrorText ) { setRedErrorText(false) }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    //console.log('currValue : ', event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value);
  }

  const handleSubmit= (event) =>{
    event.preventDefault();

    const retVal = contactService.createContact(newName, newNumber);
  
    retVal.then(retVal => {
      //console.log(retVal);

      if(retVal.code === -1){
        console.log(retVal);
        changeMessage(retVal.error.error, true)
      } else if( retVal===0 ){
        console.log('New contact added');
        contactService.getContacts().then(contacts => setPersons(contacts) )
        .then( changeMessage('New contact added'))
      } else {
        const confirm = window.confirm( `${newName} is already added to phonebook.\nDo you want to update new number to existing contact` );
        if(confirm){
          console.log('old contacts :>> ', persons);
          contactService.updateContactNumber(newName, newNumber)
            .then(updatedContacts => setPersons(updatedContacts))
            .then( () => changeMessage('Contact number changed') );
          console.log('new contacts :>> ', persons);
        }
      }
    })
  }

  const handleDelete = (id) => {
    contactService.deleteContact(id)
      .then(newContacts => {
        console.log('newContacts :>> ', newContacts);
        setPersons(newContacts.updatedContacts);

        if(newContacts.error === 1){
          console.log("Throwing error text");
          const person = persons.find(person => person.id === id )
          changeMessage(`error, contact ${person.name} is allready deleted from server`, true);
        } else {
          console.log("Throwing normal text");
          changeMessage('Contact deleted', false);
        }
      })
  }

  return (
    <div>
      <Header text = {'Phonebook'} />
      <Filter filter ={newFilter} handleChange={handleFilterChange} />
      
      <Message textToDisplay = {errorMessage} redText = {redErrorText}  />
      
      <Header text = {'add new name'} />
      <Form  handleSubmit={handleSubmit} name={newName} handleNameChange={handleNameChange}
        number={newNumber} handleNumberChange={handleNumberChange} />

      <Header text = {'Numbers'} />
      <Contacts contactList={persons} personfilter={newFilter.slice()} deleteService ={handleDelete}/>
    </div>
  )

}

export default App