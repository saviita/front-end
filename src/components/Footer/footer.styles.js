import styled from 'styled-components';

const StyledFooter = styled.footer`
	position: relative;
	background-color: #1a222f;
	color: white;
	padding: 3rem 0;
	text-align: center;
`;

const StyledFooterWave = styled.img`
	position: absolute;
	top: 1px;
	translate: 0 -100%;
`;
const StyledFooterRrss = styled.div`
	position: absolute;
	right: 10px;
	top: -30px;
	display: flex;
	flex-direction: row;
	gap: 0.75rem;

	@media screen and (width>1024px) {
		top: -75px;
	}
`;

const StyledFooterIcons = styled.img`
	width: 25px;
`;

export { StyledFooter, StyledFooterWave, StyledFooterRrss, StyledFooterIcons };
