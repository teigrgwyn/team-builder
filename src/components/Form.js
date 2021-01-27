import React from 'react';
import Styled from 'styled-components';

const StyledInput = Styled.input`
  text-align: center;
`;

export default function Form(props) {
  const { formData, onInputChange, onFormSubmit } = props;

  return (
    <>
    <div className='form-component'>
      <h3>Add Team Member:</h3>
      <form onSubmit={onFormSubmit}>
        <StyledInput
          placeholder='name'
          name='name'
          value={formData.name}
          onChange={onInputChange}
        />
        <StyledInput
          placeholder='email'
          name='email'
          value={formData.email}
          onChange={onInputChange}
        />
        <StyledInput
          placeholder='role'
          name='role'
          value={formData.role}
          onChange={onInputChange}
        />
        <input type='submit' />
      </form>
    </div>
    <br></br>
    <br></br>
    </>
  )
}