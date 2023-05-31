import "./Header.sass";
import {useState, useEffect} from 'react'
import burger from '../../imgs/burger.png'

const Header = ({ links, logo, socialMedia, withBurger }) => {
    const [showBurger, setShowBurger] = useState(false)
    const [openBurger, setOpenBurger] = useState(false)

    const linksContent = links.map((link, index) => (
        <li key={index} className='list__item'>
            <a href={link.to} target='_blank'>
                {link.title}
            </a>
        </li>
    ));

    useEffect(() => {
        if (window.innerWidth < 601) {
            setShowBurger(true)
        }
    }, []);

    return (
        <>
        <header className='header'>
            {withBurger && showBurger && <img onClick={() => setOpenBurger((old) => !old)} src={burger} />}
            <div className='header__left'>
                <a href='#' target='_blank' className='header__logo'>
                    <img src={logo} alt='nice-logo' />
                </a>
            </div>
            <div className='header__right'>
                <ul style={{'display': withBurger && showBurger ? 'none' : 'flex'}} className='header__list list'>{linksContent}</ul>
                <div className='header__icons icons'>
                    {
                        socialMedia.map((item, index) => <a key={index} href={item.to} target='_blank' className='icons__item'>
                        <img src={item.img} alt='social-media-logo' />
                    </a>)
                    }
                </div>
            </div>
        </header>
        {openBurger && <ul className='burger-list'>{linksContent}</ul>}
        </>
    );
};

export default Header;
