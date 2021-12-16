import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  & > div {
    margin-right: 12px;
    margin-bottom: 15px;
  }
`;


export const ButtonWrapper = styled.div`

    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid grey;
    text-transform: uppercase;
    margin: 10px 20px 10px 0;
    font-size: 16px;
    letter-spacing: 1px; 
 
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};

    transition: all 0.3s;

    &:hover {

      ${props =>
        !props.disabled &&
        `
    box-shadow: ${
      props.selected
        ? `0px 7px 20px grey`
        : `0px 7px 20px rgba(0, 0, 0, 0.1)`
    };
    transform: translateY(-4px);
      `}
    }

    background: ${props =>
      props.disabled ? '#f5f5f5' : props.selected ? 'green' : 'white'};
    color: ${props =>
      props.disabled ? 'rgba(0,0,0,.25)' : props.selected ? 'white' : 'grey'};

    border-color: ${props =>
        props.disabled ? '#f5f5f5' : props.selected ? 'green' : 'white'};

    box-shadow: ${props =>
      props.disabled
        ? '0px 2px 5px 0px rgba(0,0,0,0.1)'
        : props.selected
        ? `0px 7px 20px grey`
        : `0px 3px 6px 2px rgba(0, 0, 0, 0.1)`};
    transform: ${props =>
      props.selected ? 'translateY(-4px)' : 'translateY(0px)'};
`;


styled.span`
color: ${props => props.selected ? 'blue' : 'grey'};
`;