import { useState , useEffect} from 'react';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
export const App = () => {
  const [contacts , setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts') ?? []))
  const [filter , setFilter] = useState('')

  useEffect(()=> localStorage.setItem('contacts' , JSON.stringify(contacts)),[contacts])

  const deleteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id)
    setContacts(filtered);
  };
  const onAddContact = data => {
    const filtered = contacts.filter((contact)=> contact.name === data.name)
     filtered.length === 0 ? setContacts((prevState)=>[...prevState, data]) : alert(`${data.name}`) 
  };
  const filterHandler= e => {
    setFilter(e.target.value);}

   return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={onAddContact}  />

          <h2>Contacts</h2>
          <Filter filter={filter} onChangeHandler={filterHandler}/>
          <ContactList contacts={contacts} filter={filter} deleteContact={deleteContact} />
        </div>
      </>
    );
  
   }