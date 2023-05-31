import "./Home.sass";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Cards_panel from "../../components/cards-panel/Cards-panel";

const Home = () => {
    const links = [
        { title: "o que fazemos", to: "#" },
        { title: "como te ajudamos", to: "#" },
        { title: "fale conosco", to: "#" },
    ];

    return (
        <>
            <main className='home'>
                <Header links={links} />
                <section className='home__banner'>
                    <Banner />
                </section>
                <section className='home__cards'>
                    <Cards_panel />
                </section>
            </main>
        </>
    );
};

export default Home;
