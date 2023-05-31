import "./Banner.sass";
import H1 from "../headings/H1";
import Button from "../btns/Button";
import man from '../../imgs/man.png'

const Banner = () => {
    const title = "Um slogan chamativo aqui.";
    const btnPrimaryText = 'Eu quero!'
    const btnSecondaryText = 'Conhecer mais'
    return (
        <div className='banner'>
            <div className='banner-wrapped'>
                <div className='banner-wrapped__text textBlock'>
                    <H1 title={title} />
                    <p className="textBlock__info">
                        Um texto sobre o seu produto ou serviço. Explique <span>porque ele é valioso</span> e direcione o usuário ao
                        próximo objetivo.
                    </p>
                    <div className="textBlock__btns">
                       <Button primary btnText={btnPrimaryText} />
                       <Button secondary btnText={btnSecondaryText} />
                    </div>
                </div>
                <div className='banner-wrapped__image'>
                    <img src={man} alt="man-image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
