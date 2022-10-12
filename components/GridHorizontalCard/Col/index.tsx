import anime from '../../../public/animes.json'
import HorizontalCard from '../../HorizontalCard'

interface CardGridProps{
    type: 'top'|'newRealease'|'newAdded'|'justCompleted'
    className?: string;
}

const CardGrid:React.FC<CardGridProps> = ({ type, className}) => {
        const animeSlice = anime.slice(0, 9)
        return(
            <div className={className +" flex flex-col gap-2"}>
                {animeSlice.map((anime, index) => {
                    return(
                        <HorizontalCard key={index} anime={anime} index={index+1} type={type}/>
                    )
                })}
            </div>
        )

}


export default CardGrid;