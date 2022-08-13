import React from 'react';
import "./CharacterById.css"
import { useCharacterById } from '../hooks/useCharacterById'
import { useParams } from 'react-router-dom';

export default function CharacterById() {

    const { id } = useParams();

    const { loading, data } = useCharacterById(id)

    if(loading) return <h1>LOADING</h1>

  return (
    <div className='character'>
       <img src={data.character.image} width={750} height={750} alt={data.character.name} />
       <div className='character-content'>
        <h1>
            {data.character.name}
        </h1>
        <p>{data.character.gender}</p>
        <div className='character-episode'>
            {data.character.episode.map(episode => {
                return (<div>
                    {episode.name} - <b>{episode.episode}</b>     
                </div>)
            })
                
            }
        </div>
       </div>
    </div>
  )
}
