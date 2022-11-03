import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const location = useLocation();

	return (
		<nav>
			<Container className='navContainer' maxWidth='md' disableGutters>
				{location.pathname === '/' ? (
					<a href='#home'>
						<img src={logo} alt='logo' />
					</a>
				) : (
					<Link to={'/'}>
						<img src={logo} alt='logo' />
					</Link>
				)}

				<div className='buttonActions'>
					<Button variant='text'>
						{location.pathname === '/' ? (
							<a href='#about'>About</a>
						) : (
							<Link className='link' to={'/'}>
								About
							</Link>
						)}
					</Button>
					<Button variant='contained'>
						<Link to={'/contact'}>Contact Us</Link>
					</Button>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
