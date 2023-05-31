import "./Card.sass";
import plusIcon from "../../imgs/plus-icon.png";

const Card = ({ card }) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <img src={card.img} alt='card-image' />
            </div>
            <h3 className='card__title'>{card.title}</h3>
            <p className='card__text'>{card.text}</p>
            <img className='card__icon' src={plusIcon} alt='plus-icon' />
        </div>
    );
};

export default Card;
