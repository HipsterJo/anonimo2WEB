import anime from '../../public/animes.json'
import Col from './Col'

interface CardGridProps{
    className?: string;
}

const CardGrid:React.FC<CardGridProps> = ({  className}) => {
        const animeSlice = anime.slice(0, 9)
        return(
            <>
                <div className={className}>
                    <h3>Новые <p>релизы</p></h3>
                    <Col type="newRealease" />
                </div>

                <div className={className}>
                    <h3>Недавно добавленные</h3>
                    <Col type="newRealease" />
                </div>

                <div className={className}>
                    <h3>Недавно законченные </h3>
                    <Col type="newRealease" />
                </div>
          </>
        )

}


export default CardGrid;