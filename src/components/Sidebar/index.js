import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/portfolio'>
                HOME
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                ABOUT
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                PROJECTS
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                CONTACT
            </NavLink>
        </nav>
    </div>
)

export default Sidebar