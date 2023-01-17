import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Write from './Pages/Write/Write';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import { createContext, useState } from 'react';

export const context = createContext();

const App = () => {
	const [state, setState] = useState(false);
	return (
		<context.Provider value={{state,setState}}>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/write' element={state? <Write /> :<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/post/:id' element={<Detail />} />
			</Routes>
		</BrowserRouter>
		</context.Provider>
	);
};

export default App;
