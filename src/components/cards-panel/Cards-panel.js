import Card from "../cards/Card";
import "./Cards-panel.sass";
import card1 from "../../imgs/card-img1.png";
import card2 from "../../imgs/card-img2.png";
import card3 from "../../imgs/card-img3.png";

const Cards_panel = () => {
    const cards = [
        {img: card1, title: 'Rápido', text: 'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'},
        {img: card2, title: 'Do seu jeito', text: 'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'},
        {img: card3, title: 'Como você queria', text: 'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'},
    ]
    return (
        <div className='cards-panel'>
            <h3 className='cards-panel__heading'>Um subtítulo para quem rolou até aqui!</h3>
            <p className='cards-panel__info'>
                Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no
                SEO.
            </p>
            <ul className='cards-panel__list'>
                {cards.map(card => <li><Card card={card} /></li>)}
            </ul>
        </div>
    );
};

export default Cards_panel;
