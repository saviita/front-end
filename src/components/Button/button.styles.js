import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
	display: flex;
	align-items: center;
	width: max-content;
	padding: 20px;
	height: 28px;
	background-color: #008ccf;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
`;

const StyledSecondaryButton = styled.button`
	display: flex;
	align-items: center;
	width: max-content;
	padding: 20px;
	height: 28px;
	background-color: #404e64;
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
`;

const StyledDiscordButton = styled.button`
	display: flex;
	align-items: center;
	width: max-content;
	padding: 0.75rem;
	background-color: #f0f9ff;
	color: #2b3dfe;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
`;

const StyledGhostButton = styled.button`
	display: flex;
	align-items: center;
	width: max-content;
	padding: 0.75rem;
	background-color: #f0f9ff;
	color: #008ccf;
	border: 1px solid #008ccf;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 700;
`;

export {
	StyledPrimaryButton,
	StyledSecondaryButton,
	StyledDiscordButton,
	StyledGhostButton
};
