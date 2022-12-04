import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const location = useLocation();
	const isSmallScreen = useMediaQuery('(max-width: 600px)');

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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

				{!isSmallScreen ? (
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
				) : (
					<Button
						id='mobileMenu'
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<img src={menu} alt='menu' />
					</Button>
				)}

				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>
						{location.pathname === '/' ? (
							<a href='#about'>About</a>
						) : (
							<Link className='link' to={'/'}>
								About
							</Link>
						)}
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<Link to={'/contact'}>Contact Us</Link>
					</MenuItem>
				</Menu>
			</Container>
		</nav>
	);
};

export default Navbar;
