import React, { useEffect } from 'react'
import './card.css'

const Card = ({ data }) => {
    const upperCase = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    return (
        data &&
        <div className='container-card'>
            <div className='front-view-details'>
                <h3 className='pokemon-name'> {upperCase(data.name)} </h3>
                <h4 className='pokemon-type'> {upperCase(data.types[0].type.name)} </h4>
                <div className='flex-center'>
                    <img src={data.sprites.other.dream_world.front_default} alt={`something`} className='pokemon-icon' />
                </div>
                <div className='about-pokemon'>
                    <div className='flex-centre'>
                        <p>Exerience</p>
                        <p>{data.base_experience} </p>
                    </div>
                    <div className='flex-centre'>
                        <p>Height</p>
                        <p>{data.height} </p>
                    </div>
                    <div className='flex-centre'>
                        <p>Weight</p>
                        <p>{data.weight} </p>
                    </div>
                </div>
            </div>
            <div className='back-view-details'>
                <h3 className='pokemon-name'>{data.name.charAt(0).toUpperCase() + data.name.slice(1)} </h3>
                <h2 className='pokemon-heading'>Ability</h2>
                <div className='pokemon-abilities'>
                    {data.abilities.map((ability) => {
                        return <p>{upperCase(ability.ability.name)} </p>

                    })}
                </div>
                <h2 className='pokemon-heading'>Stats</h2>
                <div className='pokemon-stats'>
                    {
                        data.stats.map((status) => {
                            return <div className='flex-centre'>
                                <p>{upperCase(status.stat.name)}</p>
                                <p>{status.base_stat}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Card;

// 