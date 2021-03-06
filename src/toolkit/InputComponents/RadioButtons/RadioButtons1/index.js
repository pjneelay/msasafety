import React from 'react';
import { validate as isUuid } from 'uuid';
import { Wrapper, ButtonWrapper } from './radioButtons1.styles';
import {CheckCircleFilled  } from '@ant-design/icons';


const RadioButtons1 = ({ options, value, onChange, disabled, cssClass }) => {
  if (!options || options.length === 0) return null;


  return (
    <Wrapper className="inputs-container">
      {options.map(({ selected, label, value: val }, i) => {
        const isSelected=(!value || value === '') && i === 0? true : isUuid(val) ? val === value?.assetId : val === value;
        return(
        <ButtonWrapper
          key={i}
          onClick={() => onChange(val)}
          selected={(!value || value === '') && i === 0? true : isUuid(val) ? val === value?.assetId : val === value}
          disabled={!!disabled}
          id={`${label.split(' ').join('-').toLowerCase()}`}
        >
         
         <span>{isSelected ?<CheckCircleFilled/>: <i class="fa fa-circle-o" aria-hidden="true" style={{color:'lightgrey'}}></i>}</span> 
         {label}
        </ButtonWrapper>
      )})}
    </Wrapper>
  );
};

export default RadioButtons1;
