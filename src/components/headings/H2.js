import "./H2.sass";

const H2 = ({ title, highlighted }) => {
    return <>{highlighted ? <h2 className='h2 h2-highlighted'>{title}</h2> : <h2 className='h2'>{title}</h2>}</>;
};

export default H2;
