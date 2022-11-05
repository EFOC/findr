import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

const Contact = () => {
	const [formValues, setFormValues] = useState({
		Name: '',
		'Email Address': '',
		'Phone Number': '',
		Info: '',
	});
	const [formPhoneError, setFormPhoneError] = useState('');
	const [successfulSubmit, setSuccessfulSubmit] = useState(false);
	const [failedSubmit, setFailedSubmit] = useState(false);

	const handleOnChange = (e) => {
		setFormValues((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			!RegExp(
				/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
			).test(formValues['Phone Number'])
		) {
			setFormPhoneError('Please enter a Phone Number');
			return;
		}

		setFormPhoneError('');

		try {
			emailjs.sendForm(
				'service_sqgf5ue',
				'template_cb409tr',
				e.target,
				'BgWYL00vurLAy1COj'
			);

			setFormValues({
				Name: '',
				'Email Address': '',
				'Phone Number': '',
				Info: '',
			});
			setSuccessfulSubmit(true);
			setTimeout(() => {
				setSuccessfulSubmit(false);
			}, 3000);
		} catch (error) {
			console.log(error);
			setFailedSubmit(true);
		}
	};

	return (
		<div className='contact'>
			<ContentContainer
				contentId='contact'
				contentClassDirection='contentRow'
				maxWidth='sm'
			>
				<Typography
					variant='h4'
					sx={{ fontFamily: 'Lato Black', marginBottom: '20px' }}
				>
					Contact us
				</Typography>
				<Typography variant='body1'>
					Contact us today to find out how we can help or reach out at ...
				</Typography>

				<form onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						name='Name'
						label='Name'
						margin='normal'
						value={formValues.Name}
						onChange={handleOnChange}
						fullWidth
						required
					/>
					<TextField
						variant='outlined'
						name='Email Address'
						label='Email Address'
						margin='normal'
						value={formValues['Email Address']}
						onChange={handleOnChange}
						type='email'
						fullWidth
						required
					/>
					<TextField
						variant='outlined'
						name='Phone Number'
						label='Phone Number'
						margin='normal'
						value={formValues['Phone Number']}
						onChange={handleOnChange}
						helperText={formPhoneError}
						error={Boolean(formPhoneError)}
						type='tel'
						fullWidth
						required
					/>
					<TextField
						variant='outlined'
						name='Info'
						label="Tell us a bit of what you're looking for"
						margin='normal'
						value={formValues.Info}
						onChange={handleOnChange}
						rows={4}
						multiline
						fullWidth
						required
					/>
					<Button variant='contained' type='submit' sx={{ margin: '15px 0' }}>
						Submit
					</Button>
					{successfulSubmit && (
						<Alert severity='success' variant='filled'>
							Your Response Has Been Sent!
						</Alert>
					)}
					{failedSubmit && (
						<Alert severity='error' variant='filled'>
							An Error Has Occurred Response Not Sent
						</Alert>
					)}
				</form>
			</ContentContainer>
		</div>
	);
};

export default Contact;
