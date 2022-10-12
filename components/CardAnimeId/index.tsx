import {Anime} from '../../types/Anime';
import {RiClosedCaptioningFill} from 'react-icons/ri'
 

interface CardAnimeIdProps{
    anime: Anime;
    className?: string;
}


const CardAnimeId:React.FC<CardAnimeIdProps> = ({anime, className})=>{
    return(
        
        <div className="grid grid-cols-6 bg-black px-10 py-5 rounded">
            <div className="col-span-2 ">
                <img
                className="object-cover
                h-[200px]
                w-[150px]  
                rounded-t"
                src={anime.image}
                />
            </div>
            <div className='col-span-4 flex flex-col '>
                <h3>{anime.title}</h3>
                {anime.subs && <RiClosedCaptioningFill fill= "#5D4FE3"  size={20} viewBox="0 0 23 23"/>}
                <p>{anime.type}</p>
                <p>{anime.description}</p>
            </div>
        </div>
        
    )
}

export default CardAnimeId