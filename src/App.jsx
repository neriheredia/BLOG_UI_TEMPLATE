import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Write from './Pages/Write/Write';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';

const App = () => {
	// const user=false;
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/write' element={<Write />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/post/:id' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
