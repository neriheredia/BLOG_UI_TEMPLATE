import AboutMe from './AboutMe/AboutMe';
import Categories from './Categories/Categories';
import FollowUs from './FollowUs/FollowUs';
import './SideBar.css';

function SideBar() {
  return (
    <div className='sidebar'>
      <AboutMe />
      <Categories />
      <FollowUs />
    </div>
  )
}

export default SideBar
