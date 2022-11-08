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
					{location.pathname === '/' ? (
						<a href='#about'>
							<Button variant='text'>About</Button>
						</a>
					) : (
						<Link className='link' to={'/'}>
							<Button variant='text'>About</Button>
						</Link>
					)}

					<Link to={'/contact'}>
						<Button variant='contained'>Contact Us</Button>
					</Link>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
