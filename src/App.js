import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
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
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Contact' element={<Contact />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
