import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Write from './Pages/Write/Write';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/write' element={<Write />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
