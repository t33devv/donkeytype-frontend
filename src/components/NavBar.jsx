import { Link } from "react-router-dom"
import '../css/NavBar.css'
import logo from "../assets/logo.png"
import kb from "../assets/kb.png"
import info from '../assets/info.png'
import settings from '../assets/settings.png'
import account from '../assets/account.png'

function NavBar() {
    return(
        <nav className="navbar">
            <div className="left-section">
                <div className="brand">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
                    <Link to="/" className="brand-name">donkeytype</Link>
                </div>
                <div className="nav-items">
                    <Link to="/" className="nav-link">
                        <img src={kb} />
                    </Link>
                    <Link to="/about" className="nav-link">
                        <img src={info} />
                    </Link>
                    <Link to="/settings" className="nav-link">
                        <img src={settings} />
                    </Link>
                </div>
            </div>
            <div className="right-section">
                <Link to="/account" className="nav-link">
                    <img src={account} />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar