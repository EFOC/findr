import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
	return (
		<footer>
			<Container maxWidth='md' disableGutters>
				<Divider />
				<div className='footerItems'>
					<img src={logo} alt='logo' />

					<Typography variant='body2'>
						© 2022 Findr. All rights reserved
					</Typography>

					{/* TODO Linkedin profile link*/}
					<Link to={'/'}>
						<img src={linkedin} alt='linkedin' />
					</Link>
				</div>
				<Divider />
			</Container>
		</footer>
	);
};

export default Footer;
