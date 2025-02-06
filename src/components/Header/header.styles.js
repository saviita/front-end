import styled from "styled-components";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
`

const StyledLogo = styled.img`
width: 50px;
height: 32.31px;
`

const StyledButton = styled.button`
display: flex;
align-items: center;
width: max-content;
padding: 16px 20px;
width: 147px;
height: 28px;
background-color: #008CCF;
color: white;
border: none;
border-radius: 8px;
font-size: 16px;
font-weight: 700;
`

export {StyledHeader, StyledLogo, StyledButton}