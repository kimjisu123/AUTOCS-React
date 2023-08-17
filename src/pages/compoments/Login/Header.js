import img from './loginLogo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

return (
<div>
    <header>
        <div className="logo">
            <img src={ img } style={{width: "190px",height: "250px", marginTop: "15px"}}/>
        </div>
    </header>
</div>
)
}

export default Header;