import React from 'react';
import Styled from 'styled-components';

const StyledInput = Styled.input`
  text-align: center;
`;

export default function Form(props) {
  const { onInputChange, onFormSubmit } = props;

  return (
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
        </form>
      </div>
  )
}