import "./Header.sass";
import logo from "../../imgs/nice-logo.png";
import instagram from "../../imgs/instagram.png";
import fb from "../../imgs/fb.png";

const Header = () => {
    return (
        <header className='header'>
            <a href='#' className='header__logo'>
                <img src={logo} alt='nice-logo' />
            </a>
            <ul className='header__list list'>
                <li className='list__item'>
                    <a href='#'>o que fazemos</a>
                </li>
                <li className='list__item'>
                    <a href='#'> como te ajudamos</a>
                </li>
                <li className='list__item'>
                    <a href='#'>fale conosco</a>
                </li>
            </ul>
            <div className='header__icons icons'>
                <a href='#' className="icons__item">
                    <img src={instagram} alt='instagram-icon' />
                </a>
                <a href='#' className="icons__item">
                    <img src={fb} alt='fb-icon' />
                </a>
            </div>
        </header>
    );
};

export default Header;
