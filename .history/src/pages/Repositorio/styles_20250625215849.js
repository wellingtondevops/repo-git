import styled from "styled-components"; 

export const Loading = styled.div`
color: #FFF;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

export const Container = styled.div`
max-width: 700px;
background: #FFF;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
padding: 30px;
margin: 80px auto;
`

export const Owner = styled.header`
display: flex;
flex-direction: column;
align-items: center;

img{
    width: 150px;
    border-radius: 20%;
    margin-bottom: 20px 0;
}
`
