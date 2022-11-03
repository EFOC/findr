import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/App.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2E2D2D',
		},
		secondary: {
			main: '#68D8FC',
		},
	},
	typography: {
		fontFamily: 'Lato Regular',
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div id='home' />
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Contact' element={<Contact />} />
			</Routes>

			<Footer />
		</ThemeProvider>
	);
};

export default App;
