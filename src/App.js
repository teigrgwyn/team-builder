import React, { useState } from 'react';
//import Form from './components/Form';
import Styled from 'styled-components';
import './App.css';

const StyledInput = Styled.input`
  text-align: center;
`;

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
    teamMembers.push(formData);
    console.log(teamMembers);
  }

  return (
    // <Form formData={formData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
    <div className="App">
      <div className='form-component'>
        <h3>Add Team Member:</h3>
        <form onSubmit={onFormSubmit}>
          <StyledInput 
            placeholder="name"
            name='name'
            onChange={onInputChange}
          />
          <StyledInput 
            placeholder="email"
            name='email'
            onChange={onInputChange}
          />
          <StyledInput 
            placeholder="role"
            name='role'
            onChange={onInputChange}
          />
          <input type='submit' />
        </form>
      </div>
      {
        teamMembers.map(user => (
          <div className='user'>
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Role: {user.role}</h4>
          </div>
        ))
      }
    </div>
  );
}

export default App;
