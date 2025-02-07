import { StyledHeader, StyledLogo, StyledLogIn } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<a href=''>
				<StyledLogo src='/assets/images/icons/logo.svg' alt='' />
			</a>
			<StyledLogIn>Iniciar sesión</StyledLogIn>
		</StyledHeader>
	);
};

export default Header;
