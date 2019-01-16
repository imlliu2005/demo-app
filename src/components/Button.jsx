import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

class Button extends React.Component {
  render() {
    return (
    <div>
      <MyButton>Normal</MyButton>
      <TomatoButton primary>Primary</TomatoButton>
    </div>
    );
  }
}

export {
  Button
};
