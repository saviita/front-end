import { Link } from 'react-router-dom';
import {
	StyledPrimaryButton,
	StyledSecondaryButton,
	StyledDiscordButton
} from '../Button/button.styles';
import {
	StyledBigTitle,
	StyledDivButtons,
	StyledHeaderImg,
	StyledHeaderText,
	StyledRoadArticle,
	StyledArticleImg,
	StyledArticleText,
	StyledArticleTitle,
	StyledTopSection,
	StyledWaveHeader,
	StyledProgrammingArticle,
	StyledWorkArticle,
	StyledDiscordSection,
	StyledDiscordLogo,
	StyledDiscordTitle,
	StyledDiscordText
} from './main.styles';

const Main = () => {
	return (
		<main>
			<StyledTopSection>
				<div>
					<StyledBigTitle>Aprende FrontEnd</StyledBigTitle>
					<StyledHeaderText>
						Aprender a programar es más efectivo cuando sigues un camino claro y
						estructurado. Aquí encontrarás retos diseñados para guiarte paso a
						paso que pondrán a prueba tus habilidades.
					</StyledHeaderText>
					<StyledDivButtons>
						<Link to='/challenge'>
							<StyledPrimaryButton>Empieza a aprender</StyledPrimaryButton>
						</Link>
						<Link to='/challenge'>
							<StyledSecondaryButton>Ver desafíos</StyledSecondaryButton>
						</Link>
					</StyledDivButtons>
				</div>
				<StyledHeaderImg src='/assets/images/hero-home.svg' alt='' />
				<StyledWaveHeader src='/assets/images/header-wave.svg' alt='' />
			</StyledTopSection>
			<section>
				<StyledRoadArticle>
					<StyledArticleImg src='/assets/images/home-road.svg' alt='' />
					<div>
						<StyledArticleTitle>
							Un Camino Claro hacia el Éxito
						</StyledArticleTitle>
						<StyledArticleText>
							Olvídate del caos de aprender al azar. Aquí te guiamos con retos
							organizados de forma progresiva, dándote una ruta para que domines
							cada concepto antes de pasar al siguiente nivel.
						</StyledArticleText>
					</div>
				</StyledRoadArticle>

				<StyledProgrammingArticle>
					<StyledArticleImg src='/assets/images/home-programming.svg' alt='' />
					<div>
						<StyledArticleTitle>Construye Proyectos Reales</StyledArticleTitle>
						<StyledArticleText>
							Aprender es importante, pero construir es lo que marca la
							diferencia. Aquí encontrarás proyectos diseñados para simular
							situaciones reales
						</StyledArticleText>
					</div>
				</StyledProgrammingArticle>

				<StyledWorkArticle>
					<StyledArticleImg src='/assets/images/home-work.svg' alt='' />
					<div>
						<StyledArticleTitle>
							Desarrolla Habilidades Técnicas{' '}
						</StyledArticleTitle>
						<StyledArticleText>
							Aquí no se trata de hacer ejercicios sin sentido. Cada reto tiene
							un propósito claro, preparándote para resolver problemas reales y
							construir proyectos que realmente importen.
						</StyledArticleText>
					</div>
				</StyledWorkArticle>
			</section>
			<StyledDiscordSection>
				<StyledDiscordLogo src='/assets/images/icons/discord-logo.svg' alt='' />
				<div>
					<StyledDiscordTitle>Programa en comunidad</StyledDiscordTitle>
					<StyledDiscordText>
						Tenemos un servidor de discord donde podrás hablar con gente que se
						está enfrentando a los mismos retos que tu, pregunta dudas, comparte
						tu código y conoce gente que está al mismo nivel que tú.
					</StyledDiscordText>
				</div>
				<StyledDiscordButton>Unirse a Discord</StyledDiscordButton>
			</StyledDiscordSection>
		</main>
	);
};

export default Main;
