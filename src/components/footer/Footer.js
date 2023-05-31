import "./Footer.sass";
import Header from "../header/Header.js";
import logo from "../../imgs/nice-logo-white.png";
import fb from "../../imgs/fb-white.png";
import instagram from "../../imgs/instagram-white.png";

const Footer = ({ links }) => {
    const socialMedia = [
        { to: "#", img: instagram },
        { to: "#", img: fb },
    ];
    return (
        <>
            <footer className='footer'>
                <Header logo={logo} links={links} socialMedia={socialMedia} />
                <div className='footer__main'>
                    <p>Receba as novidades do nice</p>
                    <div>
                        <input type='text' placeholder='nome@email.com' />
                        <button className='footer__formBtn'>Inscrever</button>
                    </div>
                </div>
                <p className='footer__infoItem'>Nice template by @lopesluiza on Figma - 2021</p>
            </footer>
        </>
    );
};

export default Footer;
