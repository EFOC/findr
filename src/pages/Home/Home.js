import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import personPointing from '../../assets/person-pointing.png';
import groupTree from '../../assets/group-tree.png';
import groupCircle from '../../assets/group-circle.png';

const Home = () => {
	return (
		<div className='home'>
			<ContentContainer contentId='content1' contentClassDirection='contentRow'>
				<div>
					<Typography
						variant='h2'
						sx={{ fontFamily: 'Lato Black', marginBottom: '-10px' }}
					>
						We find your
					</Typography>
					<Typography
						variant='h2'
						sx={{ fontFamily: 'Lato Black' }}
						color='secondary'
					>
						best career match
					</Typography>
					<Typography
						variant='body2'
						sx={{
							maxWidth: '460px',
							lineHeight: '25px',
							marginBottom: '40px',
						}}
					>
						We connect candidates with their perfect career and provide support
						at every stage of the hiring process.
					</Typography>
					<Link to={'/Contact'}>
						<Button variant='contained'>GET STARTED</Button>
					</Link>
				</div>
				<img src={personPointing} alt='person pointing' />
			</ContentContainer>

			<ContentContainer contentId='content2' contentClassDirection='contentRow'>
				<div id='about' />
				<div className='text'>
					<Typography variant='body2' sx={{ color: 'rgb(104, 104, 104)' }}>
						ABOUT
					</Typography>
					<Typography
						variant='h4'
						sx={{ fontFamily: 'Lato Bold', margin: '1.3rem 0' }}
					>
						Who is Findr?
					</Typography>
					<Typography variant='body2'>
						Our agency aims to establish long-lasting and beneficial partnerships
						with both clients and candidates. We collaborate with clients to meet their
						recruitment needs by presenting them with suitable candidates, while also
						guiding candidates through the hiring process.We are committed to constantly
						improving our services, and as such, we provide regular feedback to both
						clients and job seekers.
					</Typography>
				</div>
				<img src={groupTree} alt='group tree' />
			</ContentContainer>

			<ContentContainer contentId='content3' contentClassDirection='contentRow'>
				<div className='darkBlue'>
					<div>
						<div className='card-text'>
							<Typography variant='h5' align='center'>
								FOR
							</Typography>
							<Typography
								variant='h4'
								align='center'
								sx={{ fontFamily: 'Lato Bold', margin: '1.3rem 0' }}
							>
								Clients
							</Typography>
						</div>
						<div>
							<Typography variant='body2' align='center' sx={{ maxWidth: '380px' }}>
								We work with innovative startups that want to build a superior team
								to push their company to the next level. Connect with us and lets
								work together to find the best candidate that suits you.
							</Typography>
						</div>
					</div>
				</div>
				<div className='lightBlue'>
					<div className='card-text'>
						<div>
							<Typography variant='h5' align='center'>
								FOR
							</Typography>
							<Typography
								variant='h4'
								align='center'
								sx={{ fontFamily: 'Lato Bold', margin: '1.3rem 0' }}
							>
								Candidates
							</Typography>
						</div>
						<Typography variant='body2' align='center' sx={{ maxWidth: '380px' }}>
							To begin with, we take the time to evaluate and familiarize ourselves with
							our candidates, gaining insight into their skills, qualifications, and career
							aspirations. Collaborating with them, we help them prepare for the interview
							by practicing answering relevant questions about the role. Additionally, we
							furnish them with information on the company's culture and objectives to make
							sure that our candidates' goals are in alignment. We make a concerted effort
							to keep our candidates well-informed and ready throughout the hiring process.
						</Typography>
					</div>
				</div>
			</ContentContainer>

			<ContentContainer contentId='content4' contentClassDirection='contentCol'>
				<div className='grow'>
					<Typography
						variant='h3'
						align='center'
						sx={{ fontFamily: 'Lato Bold' }}
					>
						Let’s grow together
					</Typography>
					<Typography
						variant='body2'
						align='center'
						sx={{ margin: '3rem', maxWidth: '650px' }}
					>
						Start today by connecting with us and tell a bit about yourself and
						the career path you are interested in. We would love to hear your
						goals and mindset and help you get to your best career match!
					</Typography>
					<Link to={'/Contact'}>
						<Button variant='contained'>GET STARTED</Button>
					</Link>
				</div>
				<img src={groupCircle} alt='group tree' />
			</ContentContainer>
		</div>
	);
};

export default Home;
