// App.js

import React, { useState } from 'react';
import styled from 'styled-components';
import PickerWheel from './PickerWheel';
import InputForm from './InputForm';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f8f9fa;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const App = () => {
  const [items, setItems] = useState(['Apple', 'Orange', 'Banana']);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <AppContainer>
      <Header>Picker Wheel App</Header>
      <PickerWheel items={items} />
      <InputForm onAddItem={addItem} />
    </AppContainer>
  );
};

export default App;
