import styled from 'styled-components';

const StyledCardsSection = styled.section`
	padding-top: 150px;

	@media screen and (width>1024px) {
		padding-top: 244px;
	}
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 42px;
	justify-content: center;
`;

export { StyledCardsSection, StyledButtonsContainer };
