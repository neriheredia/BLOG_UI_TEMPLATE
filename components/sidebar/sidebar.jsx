import '../sidebar/sidebar.css';
import Sidebarlist from './sidebarlist';
import data2 from '../../constants/list.json';

const Sidebar = () => (
	<div className='sidebar'>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>ABOUT ME</span>
			<img
				className='sidebarItemimg'
				src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
				alt=''
			></img>
			<p className='sidebarItemp'>
				Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet
				ex esse.Sunt eu ut nostrud id quis proident.
			</p>
		</div>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>CATEGORIES</span>
			<ul className='sidebarList'>
				{data2.map((post, key) => (
					<Sidebarlist key={key} category={post.category} />
				))}
			</ul>
		</div>
		<div className='sidebarItem'>
			<span className='sidebarTitle'>FOLLOW US</span>
			<div className='sidebarSocial'>
				<i className='sidebarIcon fab fa-facebook-square'></i>
				<i className='sidebarIcon fab fa-instagram-square'></i>
				<i className='sidebarIcon fab fa-pinterest-square'></i>
				<i className='sidebarIcon fab fa-twitter-square'></i>
			</div>
		</div>
	</div>
);
export default Sidebar;
