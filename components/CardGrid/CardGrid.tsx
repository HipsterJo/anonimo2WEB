import anime from '../../public/animes.json'
import AnimeCard from '../../components/CardAnime'

interface CardGridProps{
    rows: number;
    type: 'all'|'sub'|'dub'|'chinese'|'trending'|'random'
    className?: string;
}

const CardGrid:React.FC<CardGridProps> = ({rows, type, className}) => {
        anime.slice(0, rows*5)
        return(
            <div className={className}>
                {anime.map((anime, index) => {
                    return(
                        <AnimeCard key={index} anime={anime} />
                    )
                })}
            </div>
        )

}


export default CardGrid;