import React, { useState } from 'react';
import Form from './components/Form';
import Styled from 'styled-components';
import './App.css';

const StyledUser = Styled.div`
  border: 1px solid crimson;
`;

const initialState = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [userData] = useState([]); // state for everybody (like a global array)
  const [formData, setFormData] = useState(initialState);

  const onInputChange = event => {
    setFormData({ // format doesn't work for '.checked', does it?
      ...formData, [event.target.name]: event.target.value,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault();
    userData.push(formData);
    setFormData(initialState);
  }

  return (
    <div className="App">
      <Form userData={userData} formData={formData} onInputChange={onInputChange} onFormSubmit={onFormSubmit} />
      <h3>Current Team Members:</h3>
      {
        userData.map(user => (
          <StyledUser className='user'>
            <h4>Name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Role: {user.role}</h4>
          </StyledUser>
        ))
      }
    </div>
  );
}

export default App;
