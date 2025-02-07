import {
	StyledFooter,
	StyledFooterIcons,
	StyledFooterRrss,
	StyledFooterWave
} from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterWave src='/public/assets/images/footer-wave.svg' alt='' />
			<StyledFooterRrss>
				<StyledFooterIcons src='/assets/images/icons/discord-icon.svg' alt='' />
				<StyledFooterIcons src='/assets/images/icon-twitter.svg' alt='' />
				<StyledFooterIcons src='/assets/images/icon-instagram.svg' alt='' />
				<StyledFooterIcons src='/assets/images/icons/tiktok-icon.svg' alt='' />
			</StyledFooterRrss>
			<span>©Aprende Frontend - DorianDesings 2025</span>
		</StyledFooter>
	);
};

export default Footer;
