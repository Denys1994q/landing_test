import "./App.sass";
import Home from "../../screens/home/Home";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import logo from "../../imgs/nice-logo.png";
import fb from "../../imgs/fb.png";
import instagram from "../../imgs/instagram.png";

function App() {
    const links = [
        { title: "o que fazemos", to: "#" },
        { title: "como te ajudamos", to: "#" },
        { title: "fale conosco", to: "#" },
    ];
    const socialMedia = [
        { to: "#", img: instagram },
        { to: "#", img: fb },
    ];

    return (
        <div className='main-container'>
            <div className='header-wrapper'>
                <Header links={links} logo={logo} socialMedia={socialMedia} withBurger />
            </div>
            <div className='main-wrapper'>
                <Home />
            </div>
            <div className='footer-wrapper'>
                <Footer links={links} />
            </div>
        </div>
    );
}

export default App;
