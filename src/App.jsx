import { BrowserRouter } from 'react-router-dom';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Top from './Page/Top/Top';

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
