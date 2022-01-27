import React, {useContext} from 'react';

import {
  Wrapper,
  Label,
  Description,
  InputWrapper,
} from './inputComponents.styles';

import { ColorSelector1, ColorSelector2 } from './ColorSelectors';
import {
  RadioButtons1,
  RadioButtonsList1,
  RadioButtonsList2,
} from './RadioButtons';
import NumberInput from './NumberInput';
import TextInput from './TextInput';
import RadioButtonsExpandable from './RadioButtonsExpandable';
import RadioButtonsImages from './RadioButtonsImages';
import Dropdown from './Dropdown';
import Slider from './Slider';
import PriceQuantityInput from './PriceQuantityInput';
import {AppContext} from "../../provider/provider"


export {
  ColorSelector1,
  ColorSelector2,
  RadioButtons1,
  RadioButtonsImages,
  RadioButtonsList1,
  RadioButtonsList2,
  NumberInput,
  RadioButtonsExpandable,
  Dropdown,
  Slider,
  PriceQuantityInput,
};

const DefaultInputContainer = ({ label, description, children }) => {
  return (
    <Wrapper className={`input-component ${label.split(' ').join('-').toLowerCase()}`}>
      {label.includes('Letters Size') && <Label className="input-label">LETTERS SIZE</Label>}
      {label.includes('Letters Color') && <Label className="input-label">LETTERS COLOR</Label>}
      {/*label.includes('Trim Type') && <Label className="input-label">TRIM TYPE</Label>*/}
      {label.includes('Trim Color') && <Label className="input-label">Trim Color</Label>}
      
      {label.includes('Color') || label.includes('Gear') || label.includes('Materials') || label.includes('Thermal Liner') || label.includes('Moisture Barrier') || label.includes('Letters Text') || label.includes('B Letters Text') || label.includes('C Letters Text') || label.includes('E Letters Text') || label.includes('F Letters Text') || label.includes('Letters Size') || label.includes('B Letters Size') || label.includes('C Letters Size') || label.includes('E Letters Size') || label.includes('F Letters Size')? null :<Label className="input-label">{label}</Label>}
     
      {description && (
        <Description className="input-description">{description}</Description>
      )}
      <InputWrapper>{children}</InputWrapper>
  
    </Wrapper>
  
  );
};

export default ({
  label,
  description,
  type,
  data,
  value,
  onChange,
  cssClass,
}) => {
  const {state, setState} = useContext(AppContext);
  switch (type) {
    case 'color':
    case 'color-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <ColorSelector1
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'color-2':
      return (
        <DefaultInputContainer label={label} description={description}>
          <ColorSelector2
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'dropdown':
    case 'dropdown-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <Dropdown
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'radioButtonsList':
    case 'radioButtonsList-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsList1
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'radioButtonsList-2':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsList2
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'radioButtons':
    case 'radioButtons-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtons1
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'RadioButtonsExpandable':
    case 'RadioButtonsExpandable-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsExpandable
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'RadioButtonsImages':
    case 'RadioButtonsImages-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <RadioButtonsImages
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'slider':
      return (
        <DefaultInputContainer label={label} description={description}>
          <Slider
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'numberInput':
    case 'numberInput-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <NumberInput
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'textInput':
    case 'textInput-1':
      return (
        <DefaultInputContainer label={label} description={description}>
          <TextInput
            cssClass={cssClass}
            {...data}
            value={value}
            onChange={onChange}
          />
        </DefaultInputContainer>
      );
    case 'priceQuantity-1':
    case 'priceQuantity':
      return <PriceQuantityInput {...data} value={value} onChange={onChange} />;
    default:
      return null;
  }
};
