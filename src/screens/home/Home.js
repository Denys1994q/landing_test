import "./Home.sass";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Cards_panel from "../../components/cards-panel/Cards-panel";
import About_panel from "../../components/about-panel/About-panel";
import Form_panel from "../../components/form-panel/Form-panel";

const Home = () => {
    return (
        <>
            <main className='home'>
                <section className='home__banner'>
                    <Banner />
                </section>
                <section className='home__cards'>
                    <Cards_panel />
                </section>
                <section className='home__about'>
                    <About_panel />
                </section>
                <section className='home__form-wrapper'>
                    <div className='home__form'>
                        <Form_panel />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
