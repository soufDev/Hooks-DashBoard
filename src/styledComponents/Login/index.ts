import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: solid 1px ${props => props.theme.color};
  border-radius: 4px;
  background-color: ${props => props.theme.color};
  font-size: 18px;
  margin: 10px;
  /* border-color: #656565;  */

  &:focus {
    outline-color: ${props => props.theme.color};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
  font-size: 18px;
  margin: 10px;
  background-color: #656565;
  color: #fff;

  &:hover {
    background-color: #515151;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
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

export const FormInput = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ErrorMessage = styled.div`
  color: #cc0033;
  display: ${props => props.theme.display};
  font-size: 12px;
  line-height: 10px;
  margin: 0 15px 0;
`;