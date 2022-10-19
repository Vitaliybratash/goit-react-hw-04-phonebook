import { nanoid } from 'nanoid';
import { useState } from 'react';
export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name: name,
      number: number,
    };
    onAddContact(data);
    reset();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Name</span>
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    </>
  );
};
