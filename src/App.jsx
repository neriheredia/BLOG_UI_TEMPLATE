import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import News from './Pages/News/News';
import Navbar from './Components/Navbar/Navbar';
import Favorites from './Pages/Favorites/Favorites';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Details from './Pages/Details/Details';
import { createContext, useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import Get from './utilities/Get';

export const context = createContext();

const App = () => {
	const [state, setState] = useState(false); // logeado o no
	const [news, setNews] = useState(false); // listado de news de categoria selec.
	const [categorie, setCategorie] = useState('technology');
	const [page, setPage] = useState({start: 0, end: 8}); // pagina de 8 news

	// Necesito que al cambiar de categoria no sea necesario consultar api y demorar
	useEffect(()=>{
		Get(categorie)
			.then(data => {
				setNews(data);
			})
			.catch(e => {
				return <Home />;
			});
			console.log("Carga en App");
	},[categorie])

	return (
		<context.Provider
			value={{ state, setState, categorie, setCategorie, news, setNews, page, setPage }}
		>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/news' element={state ? <News /> : <Home />} />
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
