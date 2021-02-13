import React from 'react';
import Button from './button';
import styled from 'styled-components';


  const FilterWrapper = styled.div`
    margin: 3em 0;

    button {
      font-size: 10px;
      padding: 2px 10px;
      border-width: 2px;
    }

    @media (min-width: 550px) {
      button {
        font-size: 12px;
        padding: 2px 14px;
        margin: 0px 2px;
      }
    }

    @media (min-width: 768px) {
      & {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        font-size: 12px;
        padding: 2px 20px;
        margin: 0px 10px;
      }
    }
  `;
const ProjectsFilter = ({items, onFilter, selected}) => {
    if(!items) return;
    
    const selectedStyle = {
        backgroundColor: "#fff",
        color: "#000"
    };
    
    return <FilterWrapper>
        {items.map(({id, type}) => (
            <Button
             key={id}
            onClick={() => onFilter(type)}
            style={selected == type ? selectedStyle: null }
            >
             {type }
            </Button>
          ))}
    </FilterWrapper>;
}
 
export default ProjectsFilter;