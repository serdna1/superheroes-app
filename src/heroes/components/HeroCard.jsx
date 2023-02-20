import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego: alterEgo, characters }) => {
  // if (alter_ego === characters) return (<></>)
  // return <p>{characters}</p>
  return (alterEgo === characters)
    ? <></>
    : <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  first_appearance: firstAppearance,
  characters
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`

  // const charactersByHero = (<p>{characters}</p>)

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} className='card-img' alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>

              {/* {
                    (alter_ego !== characters) && charactersByHero
                } */}
              <CharactersByHero characters={characters} alter_ego={alterEgo} />

              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                Mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
