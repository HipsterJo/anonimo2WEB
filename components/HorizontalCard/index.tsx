import {Anime, AnimeProps} from '../../types/Anime';
import {RiClosedCaptioningFill} from 'react-icons/ri'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9} from 'react-icons/ri'
import Link from "next/link";

const indexCss= [
        "numberScore-first",
        "numberScore-second",
        "numberScore-third",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
        "numberScore",
]

interface HorizontalCardProps {
        anime: Anime
        index: number
        type: 'top'|'newRealease'|'newAdded'|'justCompleted'
}


const HorizontalCard:React.FC<HorizontalCardProps> = ({anime, index, type}) => {
    return (
        //1E1E1F
        <Link key={anime._id} href={`/anime/${anime._id}`}>
        <div className='h-[80px] w-full bg-[#1B1E22] grid grid-cols-7  gap-4 pl-2 items-center text-[#8d8d8d] hover:text-[#5a2e98]'>
                
               {type=='top' &&
                <div className= 'col-span-1 flex  justify-center'>
                        
                        <span className={indexCss[index-1]}>
                                {index}
                        </span>
                </div>}
                <div className= {type=='top' ?'col-span-1':'col-span-2'}>
                        <img
                        className= {type=='top' ? "object-cover w-full max-h-[70px] rounded-sm" : "object-cover w-full max-h-[70px] rounded-xl"}
                        src={anime.image}
                        />
                </div>
                <div className='col-span-5 flex flex-col '>
                        <h4 className='text-sm font-semibold '>{anime.title}</h4>
                        <div className='flex justify-between pr-8 items-center text-[#8d8d8d]'>
                                {anime.subs && <RiClosedCaptioningFill color="#6437a8" size="20"/>}
                                <p>{anime.type}</p>
                        </div>
                </div>

        </div>
        </Link>
    );
    }

    export default HorizontalCard;