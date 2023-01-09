import Nav from '../components/navbar/nav';
import Header from '../components/header/header';
import Home from '../pages/home/home';
import Write from '../pages/write/write';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Header />} />
				<Route path='/' element={<Home />} />
				<Route path='../write' element={<Write />} />
				<Route path='../login' element={<Login />} />
				<Route path='../register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
