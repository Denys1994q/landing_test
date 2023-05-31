import Button from "../btns/Button";
import "./About-panel.sass";
import man_phone from "../../imgs/man_phone.png";
import burger_shape from "../../imgs/burger-shape.png";

const About_panel = () => {
    const btnText = "Eu quero!";
    return (
        <>
            <div className='about-panel'>
                <div className='about-panel__info info'>
                    <p className='info__hashtag'>#contecomagente</p>
                    <h2 className='info__heading'>Simples, rápido e do seu jeito.</h2>
                    <p className='info__text'>
                        Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo.
                        Gerar identificação é a chave para <span>conquistar seu cliente.</span>
                    </p>
                    <Button primary btnText={btnText} />
                </div>
                <div className='about-panel__image'>
                    <img src={man_phone} alt='man-with-phone' />
                    <img className='burger-shapeImg' src={burger_shape} alt='' />
                </div>
            </div>
        </>
    );
};

export default About_panel;
