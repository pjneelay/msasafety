import React from 'react';
import player from './../../../toolkit/player';
import {
  Wrapper,
  PrimaryBar,
  PrimaryBarItem,
  SecondaryBarItem,
} from './menuBar.styles';

const MenuBar = ({
  primaryOptions,
  primarySelected,
  secondaryOptions,
  secondarySelected,
  handleClickPrimary,
  handleClickSecondary,
  handleSetAttribute
}) => {
  if (!primaryOptions || !primaryOptions.length) return null;
  if (localStorage.getItem('clickOnPrimary') === 'true') {
    localStorage.setItem('menuSelected', secondaryOptions[0].toLowerCase().split(' ').join('-') + "-" + primarySelected);
  }

  return (
    <Wrapper>
      <PrimaryBar className='primary-bar-wrapper'>
        {primaryOptions.map((label, i) => (
          <PrimaryBarItem
            id={label.toLowerCase().split(" ")[0] + '-menu-option'}
            className={`primary-bar-item item-` + label}
            key={i}
            onClick={e => {
              localStorage.setItem('isClickEvent', 'false');
              localStorage.setItem('clickOnPrimary', 'true');
              handleClickPrimary(i);
              handleSetAttribute({ 'GEAR_VISIBILITY' :  label })
              e.stopPropagation();
            }}
            selected={primarySelected === i}
          >
            <div className="primary-bar-label">{label}</div>
          
          </PrimaryBarItem>
        ))}
      </PrimaryBar>
      
    </Wrapper>
  );
};

export default MenuBar;
