import React, { useState } from 'react';
import { Wrapper } from './accordion2.styles';
import { PlusOutlined, MinusOutlined,RightCircleOutlined,CaretDownFilled,CaretUpFilled } from '@ant-design/icons';
import InputComponents from '../../../InputComponents';
import Navigations from '../../../../config/navigation';

const Accordion2 = ({ sections, configuration, handleSetAttribute }) => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClickSelect = idx => {
    console.log("clicked");
    setSelectedSection(selectedSection === idx ? null : idx);
  };
  

  const handleClickNext = () => {
    let selected = localStorage.getItem('menuSelected');
    let gearSelected = localStorage.getItem('gearSelected');
    localStorage.setItem('clickOnPrimary', 'false');
    let nextSubmenu = Navigations[selected].next;
    let nextMenu = Navigations[selected].menuOption;
    
    if ((gearSelected === 'Pants' && selected === 'trim-0') || (gearSelected === 'Jacket' && selected === 'other-1')) {
      nextMenu = Navigations[selected].menuOption2;
      nextSubmenu = Navigations[selected].next2;
    }

    document.getElementById(nextMenu).click();
    setTimeout(function () {
      document.getElementById(nextSubmenu).click();
      localStorage.setItem('menuSelected', nextSubmenu);
    }, 300);
  };

  if (!sections || sections.length === 0) return null;
  return (
    <>
      {sections.map(
        (
          {
            label,
            selected,
            heading,
            description,
            component: Component,
            inputs,
            cssClass
          },
          i,
        ) => (
            <Wrapper key={i} selected={ selectedSection === i} >
              <div id={cssClass && cssClass} className='section-wrapper'>
                <div className={'section-label'}><b>{label}</b></div>
                <div>{heading}</div>
                <div>{description}</div>
                <div>
                    {Component ? (
                      <Component />
                    ) : inputs && inputs.length > 0 ? (
                      inputs.map((input, j) => (
                        <InputComponents
                          key={j}
                          {...input}
                          value={configuration?.[input ? input.attribute : '']}
                          onChange={val =>
                            handleSetAttribute({ [input ? input.attribute : '']: val })
                          }
                          cssClass={[input ? input.cssClass : '']}
                        />
                      ))
                    ) : null}
                  </div>
              </div>
            </Wrapper>
          )
      )}
      <div className='next-btn' onClick={() => handleClickNext()}><b>Next <RightCircleOutlined /></b></div>
    </>
  );
};

export default Accordion2;