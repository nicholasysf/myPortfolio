import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import avatar from '../../assets/images/avatar.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={avatar} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">

            </NavLink>
        </nav>
    </div>
)

export default Sidebar