import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/Sidebar/SideBar';
import './Home.css';

function Home() {
	return (
		<div>
			<Header />
			<div className='post-sidebar'>
				<Posts />
				<SideBar />
			</div>
		</div>
	);
}

export default Home;
