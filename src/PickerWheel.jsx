// PickerWheel.js

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WheelContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 20px 0;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wheel = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: #fff;
  ${props => props.spinning && css`
    animation: ${spinAnimation} 1s linear infinite;
  `}
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const PickerWheel = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (!spinning) {
      const randomIndex = Math.floor(Math.random() * items.length);
      const randomItem = items[randomIndex];
      
      setSpinning(true);
      setTimeout(() => {
        setSelectedItem(randomItem);
        setSpinning(false);
      }, 3000); // Simulate spinning animation time (3 seconds)
    }
  };

  const wheelAnimation = useSpring({
    transform: spinning ? `rotate(${Math.random() * 1080 + 1080}deg)` : `rotate(0deg)`,
  });

  return (
    <Container>
      <WheelContainer>
        <Wheel style={wheelAnimation} spinning={spinning}>
          {spinning ? 'Spinning...' : selectedItem || 'Click Spin'}
        </Wheel>
      </WheelContainer>
      <Button onClick={spin} disabled={spinning || items.length === 0}>
        Spin
      </Button>
    </Container>
  );
};

export default PickerWheel;
