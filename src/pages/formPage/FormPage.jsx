import { useForm } from 'react-hook-form';
import {
	StyledContainer,
	StyledContainerForm,
	StyledForm,
	StyledQuery
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
			<h1>Contact Us</h1>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<StyledContainerForm>
					<label htmlFor='firstName'>First Name</label>
					<input
						{...register(
							'firstName',
							{
								required: { value: true, message: 'Is empty' },
								maxLength: { value: 20, message: '' }
							},
							{ pattern: /^[A-Za-z]+$/i }
						)}
						type='text'
						id='firstName'
					/>
					{errors.firstName && <span>{errors.firstName.message}</span>}
				</StyledContainerForm>
				<StyledContainerForm>
					<label htmlFor='lastName'>Last Name</label>
					<input
						{...register('lastName', { pattern: /^[A-Za-z]+$/i })}
						type=''
						id='lastName'
					/>
				</StyledContainerForm>

				<StyledContainerForm>
					<label htmlFor='emailAddress'>Email Address</label>
					<input {...register('email')} type='email' />
				</StyledContainerForm>
				<StyledContainerForm>
					<label htmlFor='QueryType'>Query Type</label>
					<StyledQuery>
						<div>
							<input type='radio' name='query' id='enquiry' />
							<label htmlFor='generalEnquiry'>General Enquiry</label>
						</div>
						<div>
							<input type='radio' name='query' id='request' />
							<label htmlFor='upportRequest'>Support Request</label>
						</div>
					</StyledQuery>
				</StyledContainerForm>
				<div>
					<label htmlFor='message'>Message</label>
					<input {...register('message')} />
				</div>
				<div>
					<input {...register('consent')} type='checkbox' />

					<label htmlFor='consent'>
						I hereby consent to being contacted by the team *
					</label>
				</div>

				{/* <input {...register('firstName', { required: true, maxLength: 20 })} />
				<input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
				<input type='number' {...register('age', { min: 18, max: 99 })} />
				<select {...register('gender')}>
					<option value='female'>female</option>
					<option value='male'>male</option>
					<option value='other'>other</option>
				</select>
				<input {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>} */}

				<input type='submit' />
			</StyledForm>
		</StyledContainer>
	);
};

export default FormPage;
