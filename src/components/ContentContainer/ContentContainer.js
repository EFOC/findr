import React from 'react';
import Container from '@mui/material/Container';

const contentContainer = (props) => {
	const { contentId, contentClassDirection } = props;
	return (
		<div id={contentId}>
			<Container className={contentClassDirection} maxWidth='md' disableGutters>
				{props.children}
			</Container>
		</div>
	);
};

export default contentContainer;
