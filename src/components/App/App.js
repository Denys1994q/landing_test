import Home from "../../screens/home/Home";
import Header from "../header/Header";

function App() {
    const links = [
        { title: "o que fazemos", to: "#" },
        { title: "como te ajudamos", to: "#" },
        { title: "fale conosco", to: "#" },
    ];

    return (
        <div className='main-container'>
            <Header links={links} />
            <Home />
        </div>
    );
}

export default App;
