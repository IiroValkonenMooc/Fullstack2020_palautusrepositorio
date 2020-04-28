import React, { useState } from 'react'
import Contacts from './components/Contacts'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]
  ) 
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setnewNumber ] = useState('')

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
    const tempArr = persons.map( names => names = names.name )
    console.log('tempArr :>> ', tempArr);

    if( !(tempArr.includes(newName)) ){
      console.log('New contact added');
      setPersons( persons.concat( {name: newName, number: newNumber} ) );
    } else {
      window.alert( `${newName} is already added to phonebook` );
    }
  }

  return (
    <div>
      <Header text = {'Phonebook'} />
      <Filter filter ={newFilter} handleChange={handleFilterChange} />
      
      <Header text = {'add new name'} />
      <Form  handleSubmit={handleSubmit} name={newName} handleNameChange={handleNameChange}
        number={newNumber} handleNumberChange={handleNumberChange} />

      <Header text = {'Numbers'} />
      <Contacts contactList={persons.slice()} filter={newFilter.slice()} />
    </div>
  )

}

export default App