import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ToggleButton = styled.button.attrs(props => ({
  className: props.className,
}))`
    width: 50px;
    height: 45px;
    border: none;
    background: transparent;
    left: 1em;
    z-index: 1000;
    transition: 0.7s;
    outline: 0;
    margin-top: 12px;
    position: fixed;
    top: 39%;
    z-index: 1000;
  
    & > span {
        height: 4px;
        content: "-";
        background-color: #b5b5b5;
        display: block;
        margin: 6px 4px 8px -2px;
        width: 35px;
        outline: 0;
      }
    }
  
    .top-bar, .bottom-bar {
      transition: .1s
    }
  
    &.toggled {
      transform: translateX(300px);
    
      .top-bar {
        transform: rotate(45deg);
        transform-origin: -8% 90%;
      }
      .bottom-bar {
          transform: rotate(-45deg);
          transform-origin: 10% 90%;
      }
      .middle-bar {
        opacity: 0
      }

      @media (max-width: 550px) {
        &.toggled {
          transform: translateX(250px);
          top: 50%;
        }
      }
    }
  
  `;

const ToggleSidebarButton = ({ onToggled, closeButton }) => {
  const [isToggled, setToggled] = useState(false);

  useEffect(() => {
    if (closeButton) setToggled(false);
  }, [closeButton]);

  const handleToggle = () => {
    onToggled(!isToggled);
    setToggled(!isToggled);
  };

  return (
    <ToggleButton
      className={isToggled ? "toggled" : null}
      onClick={handleToggle}
    >
      <span className="top-bar"></span>
      <span className="middle-bar"></span>
      <span className="bottom-bar"></span>
    </ToggleButton>
  );
};

export default ToggleSidebarButton;
