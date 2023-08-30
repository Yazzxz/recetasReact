import './Card.css';
import Ingrediente from './Ingrediente';

function Card({foto,titulo,receta,iconos}){
    const listaEmojis = iconos.map(elem => 
        <Ingrediente nombre={elem.nombre} emoji={elem.emoji} cantidad={elem.cantidad}/>
    )
    return(
        <div className='Card'>
            <img src={foto} alt="" />
            <div className="Card-info">
                <h1>{titulo}</h1>
                <p>{receta}</p>
            </div>
            <ul className="Card-emojis">{listaEmojis}</ul>
        </div>
    );
}

export default Card;