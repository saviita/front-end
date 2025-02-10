import { CARDS } from '../../constants/cards';
import {
	StyledCard,
	StyledCardsContainer,
	StyledImgCard,
	StyledTextCard,
	StyledTitleCard
} from './card.styles';

const Cards = () => {
	return (
		<StyledCardsContainer>
			{CARDS.map(card => {
				return (
					<StyledCard key={card.id}>
						<StyledImgCard src={card.img} alt='' />
						<StyledTitleCard>{card.title}</StyledTitleCard>
						<StyledTextCard>
							Tarjeta minimalista: fondo oscuro, QR centrado, título llamativo,
							breve descripción sobre cursos frontend. Detalles claros y
							directos.
						</StyledTextCard>
					</StyledCard>
				);
			})}
		</StyledCardsContainer>
	);
};

export default Cards;
