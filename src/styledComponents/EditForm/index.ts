import styled from 'styled-components';


export const Form = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  * {
    box-sizing: border-box;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  
  @media (max-width: 1024px) {
    width: 60%;
  }
  
  @media (min-width: 1025px) {
    width: 25%;
  }
`;

export const ControlForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SelectInput = styled.select`
  padding: 10px;
  border-radius: 5px;  
`;