import Categories from '../../Components/Categories/Categories';
import Posts from '../../Components/Posts/Posts';

import './News.css';

function Home() {
	return (
		<div className='home'>
			<div>
				<Categories />
				<Posts />
			</div>
		</div>
	);
}

export default Home;
