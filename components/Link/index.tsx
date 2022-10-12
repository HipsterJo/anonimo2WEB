import Link from 'next/link';
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi';
import {FaDonate} from 'react-icons/fa';
import {TbArrowsJoin} from 'react-icons/tb';


interface PropsType{
    text: string;
    href: string;
    className?: string;
    icon?: string|null;
}

const StrToIcons=[
    {
        name: 'GiPerspectiveDiceSixFacesRandom',
        icon: <GiPerspectiveDiceSixFacesRandom/>
    },
    {
        name: 'FaDonate',
        icon: <FaDonate/>
    },
    {
        name: 'TbArrowsJoin',
        icon: <TbArrowsJoin/>
    }

]
    


export const LinkComponent:React.FC<PropsType> = ({text, href, className, icon}) => {
    
    
    
    
    return (
        <Link href={href}>
            
            {
                icon ?
                <a className={className} >
                    <div className='flex gap-[8px] items-center'>
                    {StrToIcons.find((item)=>item.name===icon)?.icon}
                    
                    {text}
                    </div>
                </a>
                :
                <a className={className}>
                    {text}
                </a>

            }
                
           
        </Link>
    )
}


export default LinkComponent;