import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlineSportsCricket} from 'react-icons/md';
import {FaRegNewspaper} from 'react-icons/fa';
import {GiMaterialsScience, GiTechnoHeart} from 'react-icons/gi'
import {RiNotificationLine, RiGovernmentLine} from 'react-icons/ri';
import {BsMusicNote} from 'react-icons/bs';
import {BsFillHeartPulseFill} from 'react-icons/bs'
import {SiYourtraveldottv} from 'react-icons/si'


export const sidebar=[
    {
        key:1,
        title:'Home',
        icon:<AiOutlineHome/>,
        link:'/',
    },
    {
        key:2,
        title:'Latest',
        icon:<RiNotificationLine/>,
        link:'/Latest',
    },
    {
        key:3,
        title:'Politics',
        icon:<RiGovernmentLine/>,
        link:'/Politics',
    },
    {
        key:4,
        title:'Sports',
        icon:<MdOutlineSportsCricket/>,
        link:'/Sports',
    },
    {
        key:5,
        title:'News',
        icon:<FaRegNewspaper/>,
        link:'/news',
    },
    {
        key:6,
        title:'Science',
        icon:<GiMaterialsScience/>,
        link:'/Science',
    },
    {
        key:7,
        title:'Travel',
        icon:<SiYourtraveldottv/>,
        link:'/Travel',
    },
    {
        key:8,
        title:'Health',
        icon:<BsFillHeartPulseFill/>,
        link:'/Health',
    },
    {
        key:9,
        title:'Entertainment',
        icon:<RiNotificationLine/>,
        link:'/Entertainment',
    },
    {
        key:10,
        title:'Technology',
        icon:<GiTechnoHeart/>,
        link:'/Tech',
    },
]