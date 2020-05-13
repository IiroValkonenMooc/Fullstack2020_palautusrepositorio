import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'
import contactService from './services/contactServices'

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

  const hook = () => {
    console.log('Effect');
    contactService.getContacts()
      .then(contacts => setPersons(contacts) );
  }

  useEffect( hook ,[])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    //console.log('currValue : ', event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setnewNumber(event.target.value)
  }

  const handleSubmit= (event) =>{
    event.preventDefault();

    const retVal = contactService.createContact(newName, newNumber);
  
    retVal.then(retVal => {
      if( retVal===0 ){
        console.log('New contact added');    
        contactService.getContacts().then(contacts => setPersons(contacts) );  
      } else {
        window.alert( `${newName} is already added to phonebook` );
      }
    })
  }

  const handleDelete = () => {
    
  }

  return (
    <div>
      <Header text = {'Phonebook'} />
      <Filter filter ={newFilter} handleChange={handleFilterChange} />
      
      <Header text = {'add new name'} />
      <Form  handleSubmit={handleSubmit} name={newName} handleNameChange={handleNameChange}
        number={newNumber} handleNumberChange={handleNumberChange} />

      <Header text = {'Numbers'} />
      <Contacts contactList={persons} filter={newFilter.slice()} />
    </div>
  )

}

export default App