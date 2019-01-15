import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

const TextButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 32px;
  font-size: 14px;
  color: #0B61FC;
  margin-right: 8px;
  outline:none;
  border:none;
  border-radius: 2px;
  background: transparent;
  &:hover{
    background:#F5F5F5;
  }
`;

const StyledButton = styled.button`
  font-size: 12px;
  width: ${p => (p.width ? `${p.width}px` : 'auto')};
  height: ${p => (p.height ? `${p.height}px` : 'auto')};
  padding: ${p => (p.height ? 0 : 8)}px ${(p) => (p.width ? 0 : 19)}px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 3px #888;
  background:#FFF;
  color:#005BFF;
  white-space:nowrap;
  &.primary{
    background:#005BFF;
    color:#FFF;
  }
  
  ${p => !p.disabled && css`
    &.primary:hover{
      background:#006EFF;
      color:#FFF;
    }
    &:hover{
      background: #005BFF;
      color:#FFF;
    }
  `}

  &.primary:active,
  &:active{
    background: #003DAA;
    color: #FFF;
  }

  &:disabled {
    background:#949EB6;
    color:#FFF;
    cursor:not-allowed;
  }
`;

class Button extends React.Component {
  render() {
    const {
      children, className, primary,
    } = this.props;
    return (
      <StyledButton
        {...this.props}
        className={classnames(className, { primary })}>
        {children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

export {
  Button,
  TextButton,
};
