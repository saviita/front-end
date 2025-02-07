import styled from "styled-components";

const StyledFooter = styled.footer`
position: relative;
background-color: #1a222f;
color: white;
padding: 3rem 0;
text-align: center;
`

const StyledFooterWave = styled.img`
position: absolute;
top: -42px;
`
const StyledFooterRrss = styled.div`
position: absolute;
right: 10px;
top: -14px;
display: flex;
flex-direction: row;
gap: 0.75rem;
`

const StyledFooterIcons = styled.img`
width: 25px;
`

export {StyledFooter, StyledFooterWave, StyledFooterRrss, StyledFooterIcons}