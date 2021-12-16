import React from 'react';
import {
  Wrapper,
  ButtonsRow,
  ButtonWrapper,
} from './radioButtonsImages.styles';
import icnImgMissing from '../assets/no-image.webp';

const RadioButtonsImages = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;
  const THUMBNAIL_MAP = {
    'Athletix': 'https://source360-msa.azurewebsites.net/assets/athletix.png',
    'Jacket': 'https://source360-msa.azurewebsites.net/assets/jacket.png',
    'Pants': "https://source360-msa.azurewebsites.net/assets/pants.png" ,
    'Black': 'https://source360-msa.azurewebsites.net/assets/pbi-black.png',
    'Gold': 'https://source360-msa.azurewebsites.net/assets/pbi-gold.png'
  };
  
  return (
    <Wrapper>
      <ButtonsRow>
        {options.map(({ label, img, value: val }, i) => (
          <ButtonWrapper
            key={i}
            selected={ (!value || value === undefined) && i === 0? true : val === value }
            onClick={(e) => { 
              if ((val === 'Pants') || (val === 'Jacket') || (val === 'Athletix') ) {
                localStorage.setItem('gearSelected', val);
              }
              localStorage.setItem('isClickEvent', 'true');
              onChange(val) 
            }}
          >
            <div>
              <img src={THUMBNAIL_MAP[label] || icnImgMissing} alt={label} />
            </div>
            <div>{label}</div>
          </ButtonWrapper>
        ))}
      </ButtonsRow>
    </Wrapper>
  );
};

export default RadioButtonsImages;
