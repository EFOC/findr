import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';

const Navbar = () => {
	return (
		<nav>
			<Container className='navContainer'>
				<img src={logo} alt='logo' />

				<div className='buttonActions'>
					<Button variant='text' style={{ fontFamily: 'Lato Bold' }}>
						About
					</Button>
					<Button variant='contained' style={{ fontFamily: 'Lato Bold' }}>
						<Link className='link' to={'/contact'}>
							Contact Us
						</Link>
					</Button>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
