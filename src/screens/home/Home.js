import "./Home.sass";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";

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
                    <h3>Um subtítulo para quem rolou até aqui!</h3>
                    <p>
                        Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave
                        ajudam no SEO.
                    </p>
                    <ul>
                        <li>
                            card1
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Home;
