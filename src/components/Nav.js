import logo from '../images/conley-planning-logo.png';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../images/home.png';
import taskIcon from '../images/add.png';

const Nav = () => {

    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <div className='controls-container'>
                <div className='icon' onClick={() => navigate('/')}>
                    <img src={homeIcon} alt='home navigation link'/>
                    <small><span className='icon-text'>Home</span></small>
                </div>
                <div className='icon' onClick={() => navigate('/tickets')}>
                    <img src={taskIcon} alt='home navigation link'/>
                    <small><span className='icon-text'>New Ticket</span></small>
                </div>
            </div>
        </nav>
    )
};

export default Nav;