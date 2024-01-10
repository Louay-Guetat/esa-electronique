import '../css/components/card.css'

const Card = ({image, text, link}) =>{

    const handleCardClick = () => {
        if(link){
            window.open(link, '_blank');
        }
    };

    return(
        <div className="card" onClick={handleCardClick} style={link ? {cursor:'pointer'} : {cursor:'default'}}>
            <img src={image} alt={text +'image'} />
            {link? (
                <a className='partner-link'>
                    {link}
                </a>
            ) : (<></>) }
            <h2> {text} </h2>
        </div>
    )
}

export default Card;