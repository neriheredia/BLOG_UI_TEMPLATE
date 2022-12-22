import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Top from './Components/Navbar/Top';

const App = () => {
	return (
		<BrowserRouter>
			<Top />
			{/* <Routes> */}
			{/* <Route path='/' element={}/> */}
			<hr />
			<Header />
			<hr />
			<Home />
			{/* </Routes> */}
		</BrowserRouter>
	);
};

export default App;
