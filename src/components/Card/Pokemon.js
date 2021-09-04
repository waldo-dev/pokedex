import React from 'react';

 function Pokemon({ pokemon }) {
    return (
        <div className="card">
            <div className="card_image">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
            </div>
            <div className="card_name">
                <h3>{pokemon.name}</h3>
            </div>
            <div className="card_types">
                {pokemon.types.map(type => {
                    return <div className="card_type">{type.type.name}</div>
                })}
            </div>
            <div className="card_info">
                <div className="card_data card_data_weigth">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card_data card_data_height">
                    <p className="title">height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card_data card_data_ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div> 
    )
}

export default Pokemon;