import '../home/home.css';
import Posts from '../../components/posts/posts';

const Home = () => {
	return (
		<div className='home'>
			<div className='posts'>
				<Posts />
			</div>
		</div>
	);
};

export default Home;
