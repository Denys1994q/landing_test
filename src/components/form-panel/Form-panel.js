import "./form-panel.sass";
import chat from "../../imgs/char.png";
import H2 from "../headings/H2";
import whatsapp_icon from "../../imgs/whatsapp-icon.png";
import Button from "../../components/btns/Button.js";

const Form_panel = () => {
    return (
        <div className='form-panel'>
            <div className='form-panel__img'>
                <img src={chat} alt='char-image' />
            </div>
            <H2 highlighted title={"Ainda tem dúvidas? Fale conosco!"} />
            <div className='form-panel__main form-wrapper'>
                <div className='form-wrapper__info'>
                    <p className='form-panel__textP'>
                        Ofereça um meio de comunicação direto. Pode ser um <span>contato@email.com</span>.
                    </p>
                    <p className='form-panel__textP'>
                        Ou crie um formulário ao lado que entrem em contato{" "}
                        <span className='blue'>o mais rápido possível!</span>
                    </p>
                    <div className='form-panel__textWithIcon'>
                        <img className='whatsapp-icon' src={whatsapp_icon} alt='whatsapp-icon' />
                        <a href='#' target='_blank' className='form-panel__textP-bold'>
                            Hey! Estamos no whatsapp!
                        </a>
                    </div>
                </div>
                <div className='form-wrapper__form'>
                    <form className='form'>
                        <div className='form__item'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' placeholder='Nome Sobrenome' />
                        </div>
                        <div className='form__item'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' placeholder='nome@email.com.' />
                        </div>
                        <div className='form__item'>
                            <label htmlFor='tel'>Telefone</label>
                            <input type='tel' id='tel' placeholder='21 9988-7766' />
                        </div>
                        <div className='form__btn'>
                            <Button btnText={"Enviar!"} primary />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form_panel;
