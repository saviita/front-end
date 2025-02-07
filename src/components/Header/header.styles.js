import styled from "styled-components";
import { StyledPrimaryButton } from "../Button/button.styles";

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 1rem 2rem;

`

const StyledLogo = styled.img`
width: 50px;
height: 32.31px;
`

const StyledLogIn = styled(StyledPrimaryButton)`
width: 147px;

`

export {StyledHeader, StyledLogo, StyledLogIn}