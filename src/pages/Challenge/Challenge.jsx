import CardSection from '../../components/Cards-section/Cards-section';
import {
	StyledBigTitle,
	StyledHeaderImg,
	StyledHeaderText,
	StyledTopSection,
	StyledWaveHeader
} from '../../components/Main/main.styles';

const Challenge = () => {
	return (
		<main>
			<StyledTopSection>
				<div>
					<StyledBigTitle>Desafíos</StyledBigTitle>
					<StyledHeaderText>
						!Todo gran viaje comienza con un primer paso!
					</StyledHeaderText>
				</div>
				<StyledHeaderImg
					src='/public/assets/images/hero-challenges.svg'
					alt=''
				/>
				<StyledWaveHeader src='/assets/images/header-wave.svg' alt='' />
			</StyledTopSection>
			<CardSection />
		</main>
	);
};

export default Challenge;
