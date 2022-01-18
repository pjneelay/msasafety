import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  width: max-content;
  margin: 16px auto;
  
  border-radius: 3px;
  cursor: pointer;

  color: ${props => (props.selected ? '#00A94E' : 'grey')};
 

  transition: all 0.3s;

  &:hover {
    font-weight: 600;
  }

  & > div:nth-child(1) {
    width: 100px;
    border-radius: 50%;

    img {
      width: 50%;
      object-fit: contain;
      border-radius:50%;
      border: 2px solid 
      ${props => (props.selected ? `#00A94E` : 'rgba(0, 0, 0, 0)')};
    ${props =>
      props.selected && 'box-shadow: -3px 3px 5px 6px rgba(100, 100, 100, 0.1);'}
    ${props => props.selected && `color: grey;`}
    ${props =>
      props.selected && 'padding:4px'}
    }
  }

  & > div:nth-child(2) {
    width: 100px;
    margin-left:0.5rem;
    padding-top: 8px;
    font-size: 15px;

  }
`;


export const ButtonGearWrapper = styled.div`
  width: max-content;
  margin: 16px auto;
  
  border-radius: 3px;
  cursor: pointer;

  color: ${props => (props.selected ? '#00A94E' : 'grey')};
 

  transition: all 0.3s;

  &:hover {
    font-weight: 600;
  }

  & > div:nth-child(1) {
    width: 100px;
    border-radius: 50%;

    img {
      width: 100%;
      object-fit: contain;
      height:7rem;
      border: 2px solid 
      ${props => (props.selected ? `#00A94E` : 'rgba(0, 0, 0, 0)')};
    ${props =>
      props.selected && 'box-shadow: -3px 3px 5px 6px rgba(100, 100, 100, 0.1);'}
    ${props => props.selected && `color: grey;`}
    ${props =>
      props.selected && 'padding:4px'}
    }
  }

  & > div:nth-child(2) {
    width: 100px;
    margin-left:1rem;
    padding-top: 8px;
    font-size: 15px;

  }
`;
