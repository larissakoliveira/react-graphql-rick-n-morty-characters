import { Link } from "react-router-dom"
import { useCharacters } from "../hooks/useCharacters"
import "./CharactersList.css"

export default function CharactersList() {

    const { error, loading, data } = useCharacters()

    if(loading) return <h1>LOADING</h1>

    if(error) return <h1>SOMETHING WENT WRONG</h1>

    return (
    <div className="character-list">
       {data.characters.results.map(character => {
        return (
        <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
        </Link>
        )
       })}
    </div>
    )
}