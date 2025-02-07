import { StyledPrimaryButton } from '../../components/Button/button.styles';
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

			<section>
				<div>
					<StyledPrimaryButton>Todos los retos</StyledPrimaryButton>
					<button>HTML - CSS</button>
					<button>JavaScript</button>
				</div>
				<div></div>
			</section>
		</main>
	);
};

export default Challenge;
