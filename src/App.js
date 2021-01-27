import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

const teamMembers = [
  // {
  //   name: 'Janice',
  //   email: 'janice@gmail.com',
  //   role: 'Director'
  // },
  // {
  //   name: 'John',
  //   email: 'john@gmail.com',
  //   role: 'Team Lead'
  // }
]

const initialForm = {
  name: 'name',
  email: 'email',
  role: 'role'
}

function App() {
  const [formData, setFormData] = useState(initialForm); // form template expected for each user

  const onInputChange = event => {
    setFormData({ // format doesn't work for '.checked', does it?
      ...formData, [event.target.name]: event.target.value,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <Form formData={formData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
      {teamMembers}
    </div>
  );
}

export default App;
