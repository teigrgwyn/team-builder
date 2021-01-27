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

function App() {
  const [formData, setFormData] = useState({ // form template expected
    name: 'name',
    email: 'email',
    role: 'role'
  });

  const onInputChange = event => {
    setFormData({ // format doesn't work for '.checked', does it?
      ...formData, [event.target.name]: event.target.value,
    })
    console.log(formData);
  }

  const onFormSubmit = event => {
    //event.preventDefault();
    console.log("onFormSubmit");
  }

  return (
    <div className="App">
      <Form onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
      {teamMembers}
    </div>
  );
}

export default App;
