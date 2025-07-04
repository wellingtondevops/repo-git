import styled from "styled-components";

export const Container = styled.div`
max-width: 700px;
background-color: #FFF;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0,0.2);;
padding: 30px;
margin: 80px auto;

h1{
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;

  svg{
    margin-right: 10px;
  }
}
`;

export const Form = styled.form`

margin-top: 30px;
display: flex;
flex-direction: row;

input{
  flex: 1;
  border: 1px solid #DDD;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 17px;
}
  
`;
export const SubmitButton = styled.button`
  background: #0D2636;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

;
  
  
`;

