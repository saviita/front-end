import {
	StyledGhostButton,
	StyledPrimaryButton
} from '../Button/button.styles';
import Cards from '../Card/Card';
import { StyledButtonsContainer, StyledCardsSection } from './cards.styles';

const CardSection = () => {
	return (
		<StyledCardsSection>
			<StyledButtonsContainer>
				<StyledPrimaryButton>Todos los retos</StyledPrimaryButton>
				<StyledGhostButton>HTML - CSS</StyledGhostButton>
				<StyledGhostButton>JavaScript</StyledGhostButton>
			</StyledButtonsContainer>
			<Cards />
		</StyledCardsSection>
	);
};

export default CardSection;
