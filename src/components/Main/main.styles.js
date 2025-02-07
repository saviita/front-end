import styled from "styled-components"

const StyledTopSection = styled.section`
position: relative;
background-color: #1A222F;
color: white;
padding: 1rem 2rem;
text-align: center;
`

const StyledBigTitle = styled.h1`
font-size: 32px;
font-weight: bold;
`

const StyledHeaderText = styled.p`
font-size: 20px;
line-height: 30px;
`

const StyledDivButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 0.5rem;
`

const StyledHeaderImg = styled.img`
display: none;
`

const StyledWaveHeader = styled.img`
position: absolute;
bottom: 1px;
left: 0;
translate: 0 100%;
`

const StyledRoadArticle = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 25px;
padding: 68px 32px 32px 32px;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const StyledProgrammingArticle = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 25px;
padding: 68px 32px 32px 32px;
text-align: center;
border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`

const StyledWorkArticle = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 25px;
padding: 68px 32px 32px 32px;
text-align: center;
`

const StyledArticleImg = styled.img`
max-width: 300px;
`

const StyledArticleTitle = styled.h2`
font-size: 32px;
font-weight: bold;
`

const StyledArticleText = styled.p`
font-size: 20px;
line-height: 30px;
`

const StyledDiscordSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #2B3DFE;
color: white;
text-align: center;
padding: 2rem 2rem 5rem;

`

const StyledDiscordLogo = styled.img`
max-width: 200px;
`

const StyledDiscordTitle = styled.h2`
font-size: 32px;
`

const StyledDiscordText = styled.p`
font-size: 20px;
line-height: 30px;
`
export {StyledTopSection, 
    StyledBigTitle, 
    StyledHeaderText, 
    StyledDivButtons, 
    StyledHeaderImg, 
    StyledWaveHeader, 
    StyledRoadArticle, 
    StyledArticleImg, 
    StyledArticleTitle,
    StyledArticleText,
    StyledProgrammingArticle,
    StyledWorkArticle,
    StyledDiscordSection, 
    StyledDiscordLogo,
    StyledDiscordTitle,
    StyledDiscordText}