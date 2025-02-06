import { StyledHeader, StyledLogo, StyledButton } from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<a href=''>
				<StyledLogo src='/public/assets/images/icons/logo.svg' alt='' />
			</a>
			<StyledButton>Iniciar sesión</StyledButton>
		</StyledHeader>
	);
};

export default Header;
