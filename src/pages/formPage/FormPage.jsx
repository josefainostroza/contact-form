import { useForm } from 'react-hook-form';
import {
	StyledButton,
	StyledConsent,
	StyledContainer,
	StyledErrorMessage,
	StyledForm,
	StyledFormContainer,
	StyledPositionName,
	StyledQuery,
	StyledQuerySelector,
	Styledtextcontent,
	StyledTextQuery
} from './formPage.styles';

const FormPage = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it
	return (
		<StyledContainer>
			<h1>Contáctate Con Nosotros</h1>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledPositionName>
					<Styledtextcontent>
						<label htmlFor='firstName'>Nombre</label>
						<StyledFormContainer
							{...register(
								'firstName',
								{
									required: { value: true, message: 'Ingresa tu nombre' },
									maxLength: { value: 10, message: 'Máximo 10 caracteres' }
								},
								{ pattern: /^[A-Za-z]+$/i }
							)}
							type='text'
							id='firstName'
						/>
						{errors.firstName && (
							<StyledErrorMessage>
								{errors.firstName.message}
							</StyledErrorMessage>
						)}
					</Styledtextcontent>
					<Styledtextcontent>
						<label htmlFor='lastName'>Apellido</label>
						<StyledFormContainer
							{...register(
								'lastName',
								{
									required: { value: true, message: 'Ingresa tu apellido' },
									maxLength: { value: 10, message: 'Máximo 10 caracteres' }
								},
								{ pattern: /^[A-Za-z]+$/i }
							)}
							type='text'
							id='lastName'
						/>
						{errors.lastName && (
							<StyledErrorMessage>{errors.lastName.message}</StyledErrorMessage>
						)}
					</Styledtextcontent>
				</StyledPositionName>
				<Styledtextcontent>
					<label htmlFor='emailAddress'>E-mail</label>
					<StyledFormContainer
						{...register('email', {
							required: { value: true, message: 'Ingresa tu email' }
						})}
						type='email'
						id='email'
					/>
					{errors.email && (
						<StyledErrorMessage>{errors.email.message}</StyledErrorMessage>
					)}
				</Styledtextcontent>
				<Styledtextcontent>
					<label htmlFor='QueryType'>Tipo de consulta</label>
					<StyledQuery>
						<StyledQuerySelector>
							<input type='radio' name='query' id='enquiry' />
							<StyledTextQuery htmlFor='generalEnquiry'>
								Información general
							</StyledTextQuery>
						</StyledQuerySelector>
						<StyledQuerySelector>
							<input type='radio' name='query' id='request' />
							<StyledTextQuery htmlFor='upportRequest'>
								Solicitud de asistencia
							</StyledTextQuery>
						</StyledQuerySelector>
					</StyledQuery>
				</Styledtextcontent>
				<Styledtextcontent>
					<label htmlFor='message'>Mensaje</label>
					<StyledFormContainer
						{...register('message', {
							required: { value: true, message: 'Ingresa un mensaje' }
						})}
						type='text'
						id='message'
					/>
					{errors.message && (
						<StyledErrorMessage>{errors.message.message}</StyledErrorMessage>
					)}
				</Styledtextcontent>
				<div>
					<input
						{...register('consent', {
							required: {
								value: true,
								message: 'Debes aceptar el consentimiento'
							}
						})}
						type='checkbox'
						id='consent'
					/>

					<StyledConsent htmlFor='consent'>
						Entrego mi consentimiento para que el equipo se ponga en contacto
						conmigo*.{' '}
					</StyledConsent>
					{errors.consent && (
						<StyledErrorMessage>{errors.consent.message}</StyledErrorMessage>
					)}
				</div>

				<StyledButton type='submit' />
			</StyledForm>
		</StyledContainer>
	);
};

export default FormPage;
