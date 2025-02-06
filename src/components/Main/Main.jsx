import { StyledTopSection } from './main.styles';

const Main = () => {
	return (
		<main>
			<StyledTopSection>
				<div>
					<h1>Aprende FrontEnd</h1>
					<p>
						Aprender a programar es más efectivo cuando sigues un camino claro y
						estructurado. Aquí encontrarás retos diseñados para guiarte paso a
						paso que pondrán a prueba tus habilidades.
					</p>
					<div>
						<button>Empieza a aprender</button>
						<button>Ver desafíos</button>
					</div>
				</div>
				<img src='/assets/images/hero-home.svg' alt='' />
				<img src='/assets/images/header-wave.svg' alt='' />
			</StyledTopSection>
			<section>
				<article>
					<img src='/assets/images/home-road.svg' alt='' />
					<div>
						<h2>Un Camino Claro hacia el Éxito</h2>
						<p>
							Olvídate del caos de aprender al azar. Aquí te guiamos con retos
							organizados de forma progresiva, dándote una ruta para que domines
							cada concepto antes de pasar al siguiente nivel.
						</p>
					</div>
				</article>
				<article>
					<div>
						<h2>Construye Proyectos Reales</h2>
						<p>
							Aprender es importante, pero construir es lo que marca la
							diferencia. Aquí encontrarás proyectos diseñados para simular
							situaciones reales
						</p>
					</div>
					<img src='/assets/images/home-programming.svg' alt='' />
				</article>
				<article>
					<img src='/assets/images/home-work.svg' alt='' />
					<div>
						<h2>Desarrolla Habilidades Técnicas </h2>
						<p>
							Aquí no se trata de hacer ejercicios sin sentido. Cada reto tiene
							un propósito claro, preparándote para resolver problemas reales y
							construir proyectos que realmente importen.
						</p>
					</div>
				</article>
			</section>
			<section>
				<img src='/assets/images/icons/discord-logo.svg' alt='' />
				<h2>Programa en comunidad</h2>
				<p>
					Tenemos un servidor de discord donde podrás hablar con gente que se
					está enfrentando a los mismos retos que tu, pregunta dudas, comparte
					tu código y conoce gente que está al mismo nivel que tú.
				</p>
				<button>Unirse a Discord</button>
			</section>
		</main>
	);
};

export default Main;
