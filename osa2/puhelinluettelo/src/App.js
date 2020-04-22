import React, { useState } from 'react'
import Contacts from './components/Contacts'

const App = () => {
  const [persons, setPersons] = useState(
    [
      { name: 'Arto Hellas' }
    ]
  ) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    //console.log('currValue : ', event.target.value);
    setNewName(event.target.value)
  }

  const handleSubmit= (event) =>{
    event.preventDefault();
    setPersons( persons.concat( {name: newName} ) );
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={handleSubmit}>

        <div>
          name: <input  value = {newName} onChange={handleChange} />
        </div>

        <div>
          <button type="submit" >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts contactList={persons} />
    </div>
  )

}

export default App