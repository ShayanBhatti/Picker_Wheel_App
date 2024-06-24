// App.js

import React, { useState } from 'react';
import styled from 'styled-components';
import PickerWheel from './PickerWheel';
import InputForm from './InputForm';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background: #f8f9fa;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  margin-left: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  max-height: 80vh;
  overflow-y: auto;
`;

const Header = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const App = () => {
  const [items, setItems] = useState([]);
  const [latestItem, setLatestItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
    setLatestItem(item);
  };

  return (
    <AppContainer>
      <div>
        <Header>Picker Wheel App</Header>
        <PickerWheel items={latestItem ? [latestItem] : items} />
        <InputForm onAddItem={addItem} />
      </div>
      <Sidebar>
        <h2>Items</h2>
        <ItemsList>
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </ItemsList>
      </Sidebar>
    </AppContainer>
  );
};

export default App;
