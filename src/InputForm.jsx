// InputForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const InputForm = ({ onAddItem }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleAddItem = () => {
    if (value.trim() !== '') {
      onAddItem(value.trim());
      setValue('');
    }
  };

  return (
    <FormContainer>
      <Input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter new item..."
      />
      <Button onClick={handleAddItem}>Add</Button>
    </FormContainer>
  );
};

export default InputForm;
