import { NavLink } from "react-router-dom";

interface ButtonMediumProps {

    label:string,
    bgcolor:string,
     path:string,



}

export const ButtonMedium:React.FC<ButtonMediumProps>=({label,bgcolor,path}) =>{

const cssclassNotactive=`px-4 py-2 hover:border-solid hover:border-2 hover:border-gray-800 hover:px-[1.2rem] hover:py-[0.6rem] hover:border rounded-md text-sm mr-2 ${bgcolor}`;

const cssclassactive= "px-4 py-2 border-solid border-gray-700 rounded-md text-sm mr-2 bg-green-500";

         


 return(

<>
<NavLink to={path} className={({isActive}) => isActive ? cssclassactive: cssclassNotactive}>

<button >{label}</button>

</NavLink>

</>

 )


}