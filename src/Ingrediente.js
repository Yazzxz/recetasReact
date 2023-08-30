function Ingrediente({nombre, emoji, cantidad}){
    return (
        <p><strong>{nombre}</strong>{emoji}:{cantidad}</p>
    );
}

export default Ingrediente;