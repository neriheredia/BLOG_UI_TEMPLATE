import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './Pages/News/News';
import Navbar from './Components/Navbar/Navbar';
// import About from './Pages/About/About';
import Favorites from './Pages/Favorites/Favorites';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import { createContext, useState } from 'react';
import Home from './Pages/Home/Home';

export const context = createContext();

const App = () => {
	const [state, setState] = useState(false);
	const [news, setNews] = useState(false);
	const [categorie, setCategorie] = useState('technology');
	return (
		<context.Provider
			value={{ state, setState, categorie, setCategorie, news, setNews }}
		>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={state ? <News /> : <Home />} />
					{/* <Route path='/about' element={<About />} /> */}
					<Route path='/favorites' element={state ? <Favorites /> : <Home />} />
					<Route path='/login' element={!state ? <Login /> : <News />} />
					<Route path='/register' element={<Register />} />
					<Route path='/post/:id' element={<Details />} />
				</Routes>
			</BrowserRouter>
		</context.Provider>
	);
};

export default App;
