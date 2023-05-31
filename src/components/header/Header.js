import "./Header.sass";
import logo from "../../imgs/nice-logo.png";
import instagram from "../../imgs/instagram.png";
import fb from "../../imgs/fb.png";

const Header = ({ links }) => {
    const linksContent = links.map(link => (
        <li className='list__item'>
            <a href={link.to} target='_blank'>
                {link.title}
            </a>
        </li>
    ));

    return (
        <header className='header'>
            <div className='header__left'>
                <a href='#' target='_blank' className='header__logo'>
                    <img src={logo} alt='nice-logo' />
                </a>
            </div>
            <div className='header__right'>
                <ul className='header__list list'>{linksContent}</ul>
                <div className='header__icons icons'>
                    <a href='#' target='_blank' className='icons__item'>
                        <img src={instagram} alt='instagram-icon' />
                    </a>
                    <a href='#' target='_blank' className='icons__item'>
                        <img src={fb} alt='fb-icon' />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
