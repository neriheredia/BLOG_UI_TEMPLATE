import '../home/home.css';
import Posts from '../../components/posts/posts';
import Sidebar from '../../components/sidebar/sidebar';
import '../../components/sidebar/sidebar.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='posts'>
				<Posts />
			</div>
			<Sidebar />
		</div>
	);
};

export default Home;
