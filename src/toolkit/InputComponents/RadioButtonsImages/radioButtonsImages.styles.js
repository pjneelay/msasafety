import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  width: max-content;
  margin: 8px auto;
  padding: 8px 12px;
  border-radius: 3px;
  cursor: pointer;

  font-weight: ${props => (props.selected ? 600 : 400)};
  border: 2px solid 
    ${props => (props.selected ? `#00A94E` : 'rgba(0, 0, 0, 0)')};
  ${props =>
    props.selected && 'box-shadow: -3px 3px 5px 6px rgba(100, 100, 100, 0.1);'}
  ${props => props.selected && `color: grey;`}

  transition: all 0.3s;

  &:hover {
    font-weight: 600;
  }

  & > div:nth-child(1) {
    height: 120px;
    width: 100px;
    border-radius: 50%;

    img {
      width: 60%;
      object-fit: contain;
      border-radius:50%;
    }
  }

  & > div:nth-child(2) {
    width: 100px;
    text-align: center;
    padding-top: 8px;
    font-size: 13px;
  }
`;
