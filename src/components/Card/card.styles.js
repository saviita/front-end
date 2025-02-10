import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 32px;
	padding: 120px 161px 124px 161px;

	@media screen and (width>768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (width>1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	padding: 32px;
	background-color: #dee8ff;
	text-align: center;
	align-items: center;
`;

const StyledTitleCard = styled.h3`
	font-size: 36px;
	font-weight: 700px;
	margin: 0;
`;

const StyledTextCard = styled.p`
	font-size: 24px;
	font-weight: 400;
	margin: 0;
`;

const StyledImgCard = styled.img`
	width: 90%;
`;

export {
	StyledCardsContainer,
	StyledCard,
	StyledTitleCard,
	StyledTextCard,
	StyledImgCard
};
