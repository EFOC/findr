import React from 'react';
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

					<a
						href='https://www.linkedin.com/in/brandon-tran-a5308118b'
						target='#blank'
					>
						<img src={linkedin} alt='linkedin' />
					</a>
				</div>
				<Divider />
			</Container>
		</footer>
	);
};

export default Footer;
