import '../sidebar/sidebar.css';

const Sidebarlist = props => {
	return (
		<li className='sidebarListItem'>
			<a className='link' href='/posts?cat=Life'>
				{props.category}
			</a>
		</li>
	);
};

export default Sidebarlist;
