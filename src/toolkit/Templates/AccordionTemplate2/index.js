import React, { useEffect, useState, useRef } from 'react';
import { Accordion2 as Accordion } from '../../Controllers';
import Player from '../SharedComponents/Player';
import MenuBar from '../SharedComponents/MenuBar';
import { LeftOutlined ,RightOutlined} from '@ant-design/icons';
import {
  Wrapper,
  PlayerWrapper,
  Title,
  Subtitle,
  ZoomButtons,
} from './accordionTemplate2.styles';
import { useForm } from "react-hook-form";
import inputs from "../../../config/inputs";
import { pdfService } from "../../../toolkit/toolkit/pdfService"
import toolkit from '../../toolkit';
import Modal from "react-modal";
import globeLockupLogo from '../../../assets/GLOBE_LOCKUP_LOGO-R.png';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { SecondaryBar, SecondaryBarItem } from '../SharedComponents/MenuBar/menuBar.styles';
import { AppContext } from '../../../provider/provider';
import { json } from 'body-parser';

const AccordionTemplate2 = ({
  title,
  subtitle,
  controller,
  configuration,
  handleSetAttribute,
}) => {

  const [activeAddress, setActiveAddress] = useState([0, 0]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  let gearArray = {"athletix": 'groupNotAdded', "Jacket": "groupNotAdded", "Pants": "groupNotAdded"};


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }
  };
  const override = css`
  margin-top:16rem;
  justify-content:center;
`;

  const { register, handleSubmit, watch, errors } = useForm();
  watch('productQuantityJacket')
  const onSubmit = async data => {
    data.specifications = newConfiguration;
    data.letterings = letteringConfiguration;
    data.logo = 'https://cdn1-originals.webdamdb.com/12943_89215264?cache=1554208451&response-content-disposition=inline;filename%253DGLOBE_LOCKUP_LOGO-01.png&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9jZG4xLW9yaWdpbmFscy53ZWJkYW1kYi5jb20vMTI5NDNfODkyMTUyNjQ~Y2FjaGU9MTU1NDIwODQ1MSZyZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPWlubGluZTtmaWxlbmFtZSUyNTNER0xPQkVfTE9DS1VQX0xPR08tMDEucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ3NDE0NDAwfX19XX0_&Signature=VjnUQBtdTWRlZ~h4nxbo0rbD~d2HfL8rkt2VpA~TggZu-gjMmFso5c8yKyF3gSGADzD7jkty~OhUDJXKwbWifrtKtsC5GLPvsR6-t33vrJlDYhulFSr2r0F2Lupn1mPU4yb41ohLbzOWB9qorwSoJjtcAiuMN0c-ZIdyMAxscWdHfvz~KyUThv--hHu7X-mmHIYp--Q4e1Mc7MYNu-gTJsithomFSFIZGemBHMF3v6wDA1e-XIJRt-EGM47h-IafkgGPUrIKyRIq73zEnii5DRaBVNiYSVuaBk37BBiRX-delvYQa~XXTaHVjC-vMlE290Y0wln~1Kbuqd2tiq1qDw__&Key-Pair-Id=APKAI2ASI2IOLRFF2RHA';

    let snapshotModel = gearSelected === 'Athletix' ? await toolkit.player.getSnapshot({ GEAR_VISIBILITY: "Athletix" }) : gearSelected === 'Jacket' ? await toolkit.player.getSnapshot({ GEAR_VISIBILITY: "Jacket" }) : await toolkit.player.getSnapshot({ GEAR_VISIBILITY: "Pants" });

    document.getElementById("loader-container").style.display = "none";
    (await pdfService(data, snapshotModel, gearSelected) === true) ? openModal(true) : openModal(false);

  }
  const ref = useRef(null);

  let newConfiguration = [];
  let lettering = [];
  let letteringConfiguration = [];
  let letteringJsonA = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 1 };
  let letteringJsonB = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 2 };
  let letteringJsonC = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 3 };
  let letteringJsonD = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 4 };
  let letteringJsonE = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 5 };
  let letteringJsonF = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 6 };
  let letteringJsonPatch = { letteringGroup: null, letteringText: null, letteringSize: null, letteringColor: null, sortValue: 7 };
  let group = '';
  let number = '';
  let type = '';
  let groupTitle = '';
  let gear = '';
  let html = [];
  let gearSelected = localStorage.getItem('gearSelected');
  let gearTitle = '';
  let existSections = [];

  useEffect(() => {
    let groupsDom = document.querySelectorAll(".configuration-wrapper .group");
  
    for (let a = 0; a < groupsDom.length; a++){
      
      if(a !== 0 && a !== 1 && a !== 5 && a!==39){
        groupsDom[a].style.display = "none";
      }
      groupsDom[a].style.marginBottom = a == 5 ? "20px" : 0;
    }
  })
  
  if (configuration !== null) {
    for (var key in configuration) {
      group = '';
      number = '';
      type = '';
      gear = '';
      let sortGroup = { 'NA': 1, CLOS: 2, GENERIC: 3, HOLDER: 4, LTRG: 5, MISCELLANEOUS: 6, PATCH: 7, PCKT: 8, REINFORCEMENT: 9, SUSPENDER: 10, SLVW: 11, TRIM: 12 };
      let sortByGearGroup = { 'athletix': 1, 'Jacket': 2, 'Pants': 3 }
      if (key.includes('Row') || key.includes('Patch Lettering')) {
        lettering.push({ key: key, description: configuration[key] });
      }

      if (configuration[key] !== '') {

        for (var keyInput in inputs) {
          if (inputs[keyInput].attribute === key && !key.includes('Row')) {

            group = inputs[keyInput].optionGroup[configuration[key]];
            number = inputs[keyInput].optionNumber[configuration[key]];
            type = inputs[keyInput].optionType[configuration[key]];
            gear = inputs[keyInput].gear;
          }
        }
        if (configuration[key].assetId !== undefined && configuration[key].assetId !== '' && !key.includes('Row') && !key.includes('Patch Lettering') && (gearSelected === gear || gear === 'athletix')) {
          newConfiguration.push({
            optionNumber: number ? number : inputs[keyInput].optionNumber[gear] ? inputs[keyInput].optionNumber[gear] : "",
            optionGroup: group ? group :  inputs[keyInput].optionGroup[gear] ? inputs[keyInput].optionGroup[gear] : "",
            optionDescription: configuration[key].assetId,
            optionType: type,
            attribute: key,
            sortValue: sortGroup[group],
            gear: gear ? gear : inputs[keyInput].gear ? inputs[keyInput].gear : "",
            sortByGear: sortByGearGroup[gear]
          })

        } else if (configuration[key].assetId === undefined && !key.includes('Row') && !key.includes('Patch Lettering') && configuration[key] !== "None" && configuration[key] !== "NONE" && (gearSelected === gear || gear === 'athletix' || gearSelected === 'Athletix')) {
          newConfiguration.push({
            optionNumber: number ? number : inputs[keyInput].optionNumber[gear] ? inputs[keyInput].optionNumber[gear] : "",
            optionGroup: group ? group :  inputs[keyInput].optionGroup[gear] ? inputs[keyInput].optionGroup[gear] : "",
            optionDescription: configuration[key],
            optionType: type,
            attribute: key,
            sortValue: sortGroup[group],
            gear: gear ? gear : inputs[keyInput].gear ? inputs[keyInput].gear : "",
            sortByGear: sortByGearGroup[gear]
          })
        }
      }
    }
  }

  if (lettering.length !== 0) {
    for (var i = 0; i < lettering.length; i++) {
      if (lettering[i] !== null) {
        let complete = true;
        switch (lettering[i].key.includes('Row A') ? 'A' : lettering[i].key.includes('Row B') ? 'B' : lettering[i].key.includes('Row C') ? 'C' : lettering[i].key.includes('Row D') ? 'D' : lettering[i].key.includes('Row E') ? 'E' : lettering[i].key.includes('Row F') ? 'F' : lettering[i].key.includes('Patch Lettering') ? 'Patch Lettering' : '') {
          case 'A':
            letteringJsonA.letteringGroup === null ? letteringJsonA.letteringGroup = 'Row A' : letteringJsonA.letteringGroup = letteringJsonA.letteringGroup;
            letteringJsonA.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonA.letteringText = lettering[i].description : letteringJsonA.letteringText = null : letteringJsonA.letteringText = letteringJsonA.letteringText;
            letteringJsonA.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonA.letteringSize = lettering[i].description : letteringJsonA.letteringSize = null : letteringJsonA.letteringSize = letteringJsonA.letteringSize;
            letteringJsonA.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonA.letteringColor = lettering[i].description : letteringJsonA.letteringColor = null : letteringJsonA.letteringColor = letteringJsonA.letteringColor;

            for (var key in letteringJsonA) {
              if (letteringJsonA[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonA)
            }
            break;
          case 'B':
            letteringJsonB.letteringGroup === null ? letteringJsonB.letteringGroup = 'Row B' : letteringJsonB.letteringGroup = letteringJsonB.letteringGroup;
            letteringJsonB.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonB.letteringText = lettering[i].description : letteringJsonB.letteringText = null : letteringJsonB.letteringText = letteringJsonB.letteringText;
            letteringJsonB.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonB.letteringSize = lettering[i].description : letteringJsonB.letteringSize = null : letteringJsonB.letteringSize = letteringJsonB.letteringSize;
            letteringJsonB.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonB.letteringColor = lettering[i].description : letteringJsonB.letteringColor = null : letteringJsonB.letteringColor = letteringJsonB.letteringColor;
            for (var key in letteringJsonB) {
              if (letteringJsonB[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonB)
            }
            break;
          case 'C':
            letteringJsonC.letteringGroup === null ? letteringJsonC.letteringGroup = 'Row C' : letteringJsonC.letteringGroup = letteringJsonC.letteringGroup;
            letteringJsonC.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonC.letteringText = lettering[i].description : letteringJsonC.letteringText = null : letteringJsonC.letteringText = letteringJsonC.letteringText;
            letteringJsonC.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonC.letteringSize = lettering[i].description : letteringJsonC.letteringSize = null : letteringJsonC.letteringSize = letteringJsonC.letteringSize;
            letteringJsonC.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonC.letteringColor = lettering[i].description : letteringJsonC.letteringColor = null : letteringJsonC.letteringColor = letteringJsonC.letteringColor;
            for (var key in letteringJsonC) {
              if (letteringJsonC[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonC)
            }
            break;
          case 'D':
            letteringJsonD.letteringGroup === null ? letteringJsonD.letteringGroup = 'Row D' : letteringJsonD.letteringGroup = letteringJsonD.letteringGroup;
            letteringJsonD.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonD.letteringText = lettering[i].description : letteringJsonD.letteringText = null : letteringJsonD.letteringText = letteringJsonD.letteringText;
            letteringJsonD.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonD.letteringSize = lettering[i].description : letteringJsonD.letteringSize = null : letteringJsonD.letteringSize = letteringJsonD.letteringSize;
            letteringJsonD.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonD.letteringColor = lettering[i].description : letteringJsonD.letteringColor = null : letteringJsonD.letteringColor = letteringJsonD.letteringColor;
            for (var key in letteringJsonD) {
              if (letteringJsonD[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonD)
            }
            break;
          case 'E':
            letteringJsonE.letteringGroup === null ? letteringJsonE.letteringGroup = 'Row E' : letteringJsonE.letteringGroup = letteringJsonE.letteringGroup;
            letteringJsonE.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonE.letteringText = lettering[i].description : letteringJsonE.letteringText = null : letteringJsonE.letteringText = letteringJsonE.letteringText;
            letteringJsonE.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonE.letteringSize = lettering[i].description : letteringJsonE.letteringSize = null : letteringJsonE.letteringSize = letteringJsonE.letteringSize;
            letteringJsonE.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonE.letteringColor = lettering[i].description : letteringJsonE.letteringColor = null : letteringJsonE.letteringColor = letteringJsonE.letteringColor;
            for (var key in letteringJsonE) {
              if (letteringJsonE[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonE)
            }
            break;
          case 'F':
            letteringJsonF.letteringGroup === null ? letteringJsonF.letteringGroup = 'Row F' : letteringJsonF.letteringGroup = letteringJsonF.letteringGroup;
            letteringJsonF.letteringText === null ? lettering[i].key.includes('Lettering') ? letteringJsonF.letteringText = lettering[i].description : letteringJsonF.letteringText = null : letteringJsonF.letteringText = letteringJsonF.letteringText;
            letteringJsonF.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonF.letteringSize = lettering[i].description : letteringJsonF.letteringSize = null : letteringJsonF.letteringSize = letteringJsonF.letteringSize;
            letteringJsonF.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonF.letteringColor = lettering[i].description : letteringJsonF.letteringColor = null : letteringJsonF.letteringColor = letteringJsonF.letteringColor;
            for (var key in letteringJsonF) {
              if (letteringJsonF[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonF)
            }
            break;
          case 'Patch Lettering':
            letteringJsonPatch.letteringGroup === null ? letteringJsonPatch.letteringGroup = 'Patch Lettering' : letteringJsonPatch.letteringGroup = letteringJsonPatch.letteringGroup;
            letteringJsonPatch.letteringText === null ? lettering[i].key.includes('Lettering Input') ? letteringJsonPatch.letteringText = lettering[i].description : letteringJsonPatch.letteringText = null : letteringJsonPatch.letteringText = letteringJsonPatch.letteringText;
            letteringJsonPatch.letteringSize === null ? lettering[i].key.includes('Size') ? letteringJsonPatch.letteringSize = lettering[i].description : letteringJsonPatch.letteringSize = null : letteringJsonPatch.letteringSize = letteringJsonPatch.letteringSize;
            letteringJsonPatch.letteringColor === null ? lettering[i].key.includes('Color') ? letteringJsonPatch.letteringColor = lettering[i].description : letteringJsonPatch.letteringColor = null : letteringJsonPatch.letteringColor = letteringJsonPatch.letteringColor;
            for (var key in letteringJsonPatch) {
              if (letteringJsonPatch[key] === null) {
                complete = false;
              }
            }
            if (complete === true) {
              letteringConfiguration.push(letteringJsonPatch)
            }
            break;
        }
      };
    }

  }

  // newConfiguration.sort(((a, b) => a.sortValue - b.sortValue));
  newConfiguration.sort(((a, b) => a.sortByGear - b.sortByGear));

  letteringConfiguration.sort(((a, b) => a.sortValue - b.sortValue));
  let secondaryOptions;
  // newConfiguration.sort(((a, b) => a.gear - b.gear));

  if (controller?.[activeAddress[0]]?.sections) {
    secondaryOptions = controller[activeAddress[0]].sections.map(
      ({ label }) => label
    );
  }

  let menuOption = controller?.[activeAddress[0]] && controller[activeAddress[0]].label;
  let subMenuOption = controller?.[activeAddress[0]]?.sections?.[activeAddress[1]] && controller[activeAddress[0]]?.sections?.[activeAddress[1]].label;
  let extraClass = `${menuOption && menuOption.toLowerCase()} ${subMenuOption && subMenuOption.toLowerCase()}`;

  let controllerOnView = controller.length !== 0 ? controller[activeAddress[0]].label : '';
  let percentage = controllerOnView === 'pants' || controllerOnView === 'jacket' ? '2.6%' : '3%';

  const configurationSection = (itemGroup) => {
    html = [];
    if (itemGroup !== null && ifExistSection(itemGroup,gearTitle) === false) {
      for (var i = 0; i < newConfiguration.length; i++) {
        if (newConfiguration[i].gear === gearTitle && gearArray[gearTitle] == "groupNotAdded") {
          html.push(<div key={i} className='group-content-row configuration-table-div'>
            <dt className='configuration-table-attribute'>{newConfiguration[i].attribute}: </dt>
            <dd className='configuration-table-optionNumber'>{newConfiguration[i].optionNumber}</dd>
            <dd className='configuration-table-optionGroup'>{newConfiguration[i].optionGroup ? <span className='dd--span__breadcrum'>|</span> : ""}{newConfiguration[i].optionGroup}</dd>
            <dd className='configuration-table-optionDescription'>{newConfiguration[i].optionDescription? <span className='dd--span__breadcrum'>|</span> : ""}{newConfiguration[i].optionDescription}</dd>
          </div>)
        }
        existSections.push({ group: itemGroup, gear: gearTitle });
        groupTitle = itemGroup;
      }
    };
    gearArray[gearTitle] = "groupAdded";
  }

  const ifExistSection = (group, gear) => {
    for (var i = 0; i < existSections.length; i++) {
      if (existSections[i].group === group && existSections[i].gear === gear) {
        return true;
      }
    }
    return false;
  };

  const gearHeader = (item) => {
    gear = '';
    if (item !== null && gearArray[item.gear] == "groupNotAdded") {
      if (gearTitle === '') {
        gear = item.gear;
      } else if (item.gear !== gearTitle) {
        gear = item.gear;
      }
      gearTitle = item.gear;
    }
    return ucword(gear);
  };

  const ucword = (str) => {
    str = str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (replace_latter) {
      return replace_latter.toUpperCase();
    });  //Can use also /\b[a-z]/g

    return str;  //First letter capital in each word
  }

  const openModal = (typeOfMessage) => {
    // console.log('typeOfMessage',typeOfMessage);
    // typeOfMessage === true ? setModalMessage('Your mail has been sent successfuly !!')  : setModalMessage( 'The mail could not be sent !!');
    setModalMessage('Your mail has been sent successfully!!')
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  const zoomAndControllers = (zoomlevel) => {
   
    window.threekitApi.api.camera.zoom(zoomlevel);
  }
 const currentYear = new Date;
  
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div id="mainContainer" className="container">
      <header>
        <img src={globeLockupLogo} className="header-logo" alt="" />
        <MenuBar
          primaryOptions={controller.map(({ label }) => label)}
          primarySelected={activeAddress[0]}
          secondaryOptions={secondaryOptions}
          secondarySelected={activeAddress[1]}
          handleClickPrimary={val => setActiveAddress([val, 0])}
          handleClickSecondary={val => setActiveAddress([activeAddress[0], val])}
          handleSetAttribute={handleSetAttribute}
        />
      </header>
      <div id="loader-container">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
      <Wrapper className={`player-container ` + extraClass}>
         
        <PlayerWrapper className='three-d-player-space'>
        
        <Player />
          
          <div className='disclaimer'>
            Images displayed are for illustration purposes only. Actual product may vary. &nbsp;
              <a target='blank' href="https://globe.msasafety.com/configurator/support">
              Learn more
              </a>
          </div>
          {window.threekitApi? 
          <div style={{position:'absolute'}} className='zoom-wrapper'>
             <button style={{borderRadius:'5px',border:'0', backgroundColor: "#FFF",marginBottom:'3px'}} onClick={() => zoomAndControllers(-2)}><MinusOutlined style={{borderRadius:'5px',fontSize: '22px', color: 'grey',padding:'5px'}}/></button>
         
             <button style={{borderRadius:'5px',border:'0', backgroundColor: "#FFF"}} onClick={() => zoomAndControllers(2)}><PlusOutlined style={{borderRadius:'5px',fontSize: '22px', color: 'grey',padding:'5px'}}/></button><br></br>
        </div>
        :  null  }
        </PlayerWrapper>
        
        {window.threekitApi? 
        <div className='container' style={{width: "48vw"}}>
           {(secondaryOptions.length >3)? <div className='buttonBar'><div className='leftButton' onClick={() => scroll(-30)} style={{overflowX:'unset',position:'fixed',zIndex:'2000',marginTop:'2rem',borderRadius:'50%',borderColor:'white',backgroundColor:'white',padding:'8px',boxShadow:'0 10px 6px -6px grey'}}><LeftOutlined style={{ fontSize: '16px', color: ' #00A94E' }} /></div><div style={{display:'flex',justifyContent:'flex-end'}}><div className='rightButton' onClick={() => scroll(30)} style={{overflowX:'unset',position:'fixed',zIndex:'2000',marginTop:'2rem',borderRadius:'50%',borderColor:'white',backgroundColor:'white',padding:'8px',boxShadow:'0 10px 6px -6px grey'}}><RightOutlined style={{ fontSize: '16px', color: ' #00A94E' }} /></div></div></div> :null }
         
          <SecondaryBar className='secondary-bar-wrapper col-padding' show={secondaryOptions && secondaryOptions.length} ref={ref}>
          {secondaryOptions.map((label, i) => {  
          console.log("config", label.toLowerCase().split(' ').join('-') + "-" + activeAddress[0])

          return(
            
          <SecondaryBarItem
            id={label.toLowerCase().split(' ').join('-') + "-" + activeAddress[0]}
            className='secondary-bar-item'
            key={i}
            onClick={e => {
              e.stopPropagation();
              setActiveAddress([activeAddress[0], i]);
              localStorage.setItem('clickOnPrimary', 'false');
              localStorage.setItem('menuSelected', label.toLowerCase().split(' ').join('-') + "-" + activeAddress[0]);
            }}
            selected={activeAddress[1] === i}
          >
            {label}
          </SecondaryBarItem>
         
          )})}
     
        </SecondaryBar>
        {/*(secondaryOptions.length >3)?    <span><button onClick={() => scroll(30)} style={{marginLeft:'50rem',marginTop:'-5rem',borderRadius:'50%',borderColor:'white'}}><RightOutlined /></button></span>
        :null */}
         
      <div className='template-wrapper regular-wapper' style={{ width: '48vw' }}>
          {/*{controller?.[activeAddress[0]] && (
            <Title className="template-title">
              {controller[activeAddress[0]].label}
            </Title>
          )}
          {controller?.[activeAddress[0]]?.sections?.[activeAddress[1]] && (
            <Subtitle className="template-subtitle">
              {controller[activeAddress[0]]?.sections?.[activeAddress[1]].label}
            </Subtitle>
          )}*/}
          <Accordion
            sections={
              controller[activeAddress[0]]?.sections?.[activeAddress[1]]
                ?.sections
            }
            configuration={configuration}
            handleSetAttribute={handleSetAttribute}
          />
        </div>
        <div className='template-wrapper summary-wrapper' style={{ width: '45vw' }}>
          {/* {controller?.[activeAddress[0]]?.sections?.[activeAddress[1]] && (
            <Subtitle className="template-subtitle">
              {controller[activeAddress[0]]?.sections?.[activeAddress[1]].label}
            </Subtitle>
          )} */}
          
          <div className='configuration-wrapper'>
          <div className="summary--padding" style={{color:'red'}}>*<span style={{color: "#57585A"}}>Swipe down and save your design</span></div>
            {newConfiguration.map((item, index) => (
              <div key={item + index} className='group'>
                {groupTitle !== item.optionGroup ? <div className='header-gear summary--padding'>{gearHeader(item)}</div> : null}
                {/* {groupTitle !== item.optionGroup && ifExistSection(item.optionGroup,gearTitle) === false ? <div className='group-header'>{item.optionGroup}</div> : null} */}
                {groupTitle !== item.optionGroup ? <div className='group-content'> <dl className='configuration-table'>{configurationSection(item.optionGroup)}{html.map((item, index) => (item))}</dl> </div> : null}
              </div>
            ))}
          </div>

          <div className='lettering-wrapper'>
          {letteringConfiguration == null && letteringConfiguration == '' ?'':''}
            {letteringConfiguration.map((item, index) => (
              <div key={index}>
                {item.letteringText !== null && item.letteringText !== '' ?
                  <div key={index} className='group'>
                    <div className='group-header'>{item.letteringGroup}</div>
                    <div className='group-content'>
                      <div className='group-content-row'>
                        <div>{item.letteringText}</div>
                        <div>{item.letteringColor}</div>
                        <div>{item.letteringSize}</div>
                      </div>
                    </div>
                  </div> : null}
              </div>
            ))}
          </div>

          <div className='submit-wrapper'>
          <div className="summary--padding" style={{color:'red'}}>*<span style={{color: "#57585A"}}>Swipe down and submit your request</span></div>
            <div className='group'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='group-header'>User Information</div>
                <div className='group-content'>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>First Name:</label>
                      <input name="firstName" ref={register({ required: true })} />
                      {errors.firstName && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Last Name:</label>
                      <input name="lastName" ref={register({ required: true })} />
                      {errors.lastName && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Company Name:</label>
                      <input name="companyName" ref={register({ required: true })} />
                      {errors.companyName && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Street Address:</label>
                      <input name="streetAddress" ref={register({ required: true })} />
                      {errors.streetAddress && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>City:</label>
                      <input name="city" ref={register({ required: true })} />
                      {errors.city && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>State:</label>
                      <input name="state" ref={register({ required: true })} />
                      {errors.state && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Country:</label>
                      <input name="country" ref={register({ required: true })} />
                      {errors.country && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Postal Code:</label>
                      <input name="postalCode" ref={register({ required: true })} />
                      {errors.postalCode && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                </div>

                <div className='group-header'>Quote Information</div>
                <div className='group-content'>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>Quote Name:</label>
                      <input name="quoteName" ref={register({ required: false })} />
                      {errors.quoteName && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label>PO Number:</label>
                      <input name="poNumber" ref={register({ required: false })} />
                      {errors.poNumber && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <label className='form-input-label'>Product  Quantity:</label>
                      <div className='group-content-input'>
                        <input name="productQuantityJacket" className='form-input-group' type="number" defaultValue={0} ref={register({ required: true, min: 0, valueAsNumber: true })} />
                        <span className=''><strong>ATHLETIX&trade; JACKET</strong></span>
                        {errors.productQuantityJacket && <span className='form-group-message-error'>This field is required and cannot be less than 0</span>}
                        <input name="productQuantityPants" className='form-input-group input-pants' type="number" defaultValue={0} ref={register({ required: true, min: 0, valueAsNumber: true })} />
                        <span className=''><strong>ATHLETIX&trade; PANTS</strong></span>
                        {errors.productQuantityPants && <span className='form-group-message-error'>This field is required and cannot be less than 0</span>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='group-header'>Recipient(s)</div>
                <div className='group-content'>
                  <div className='group-content-row'>
                    <div className='submit-row'>
                      <input name="globeCustomerService" className='form-checkbox-input' type="checkbox" ref={register()} />
                      <label className='form-checkbox-label'>Globe Customer Service</label>
                      {/* {errors.quoteName && <span className='form-message-error'>This field is required</span>} */}
                    </div>
                  </div>
                  <div className='group-content-row content-email'>
                    <div className='submit-row'>
                      <label>Recipient Email(s):</label>
                      <input name="recipientEmail" type="email" ref={register({ required: true })} />
                      {errors.recipientEmail && <span className='form-message-error'>This field is required</span>}
                    </div>
                  </div>

                </div>

                <div className='content-submit'>
                  <input className='form-submit' type="submit" />
                </div>

              </form>
            </div>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel=""
            >

              {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
              <div className='modal-message'>{modalMessage}</div>
              <button className='button-modal' onClick={closeModal}>close</button>

            </Modal>
          </div>
      
        </div>
        </div>
        :   <div><div> <ClipLoader size={155} css={override} color={'#00A94E'}/></div><div className="Loader" style={{marginLeft:'50px'}}><h2>Loading...</h2></div></div>
       }
      </Wrapper>
      <div></div>
      <footer>
        <p>{`© ${currentYear.getFullYear()}  Globe Holding Company, LLC . All rights reserved. |`}<a href="https://globe.msasafety.com/configurator/support">Support</a></p>
      </footer>
    </div>
  );
};

export default AccordionTemplate2;
