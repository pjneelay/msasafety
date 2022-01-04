import React from 'react';
import {
  Wrapper,
  ButtonsRow,
  ButtonWrapper,
  ButtonGearWrapper,
} from './radioButtonsImages.styles';
import icnImgMissing from '../assets/no-image.webp';
import LimeColor from '../assets/Lime.png';
import orangeColor from '../assets/orange.png';

const RadioButtonsImages = ({ options, value, onChange }) => {
  if (!options || options.length === 0) return null;
  const THUMBNAIL_MAP = {
    'Athletix': 'https://source360-msa.azurewebsites.net/assets/athletix.png',
    'Jacket': 'https://source360-msa.azurewebsites.net/assets/jacket.png',
    'Pants': "https://source360-msa.azurewebsites.net/assets/pants.png" 
    
  };
  
  const THUMBNAIL_COLORMAP = {
    'Black': 'https://source360-msa.azurewebsites.net/assets/pbi-black.png',
    'Gold': 'https://source360-msa.azurewebsites.net/assets/pbi-gold.png',
    'Lime/Yellow': LimeColor,
    'Red/Orange': orangeColor
  };


  return (
    <Wrapper>
      <ButtonsRow>
        {options.map(({ label, img, value: val }, i) => (
         <div>
           {((val === 'Pants') || (val === 'Jacket') || (val === 'Athletix') )  ? 
           <ButtonGearWrapper
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
          </ButtonGearWrapper> :
          
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
              <img src={THUMBNAIL_COLORMAP[label] || icnImgMissing} alt={label} />
            </div>
            <div>{label}</div>
          </ButtonWrapper>
          
          
          }
          
         </div>
        
        ))}
      </ButtonsRow>
    </Wrapper>
  );
};

export default RadioButtonsImages;
