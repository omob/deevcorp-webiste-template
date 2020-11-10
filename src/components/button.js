import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  margin-top: 1em;
  padding: 5px 20px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ theme }) => theme.button};
  border-width: 3px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

const Button = ({ title, onClick, style }) => {
  return (
    <ButtonWrapper onClick={onClick} style={style}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;
