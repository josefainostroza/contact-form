import styled, { css } from 'styled-components';

const errorStyle = css`
  border-color: red;
  color: red;
`;
const StyledContainer = styled.div`
	background-color: white;
	padding: 24px;
	border-radius: 16px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

const Styledtextcontent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
const StyledQuery = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

`;
const StyledQuerySelector = styled.div`
width: 100%;
height: 51px;
padding: 12px 24px;
border-radius: 8px;
border: 1px solid #86A2A5;
`;
const StyledTextQuery = styled.label`
	margin-left: 12px;
`;
const StyledFormContainer = styled.input`
width: 100%;
height: 51px;
padding: 12px 24px;
border-radius: 8px;
border: 1px solid #86A2A5;
`;

const StyledPositionName = styled.div`
	display: flex;
	flex-direction: column;

@media (min-width > 768px) {
	flex-direction: row;
	gap: 16px;
    }

`;


const StyledErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;
const StyledConsent = styled.label`
	margin-left: 19px;
`;
const StyledButton = styled.input`
width: 100%;
height: 59px;
background-color: #0C7D69;
color: white;
border-radius: 8px;
`;


export { StyledPositionName, errorStyle, StyledErrorMessage, StyledContainer, Styledtextcontent, StyledQuery, StyledForm, StyledTextQuery, StyledFormContainer, StyledConsent, StyledButton, StyledQuerySelector };
