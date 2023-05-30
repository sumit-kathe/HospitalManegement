
interface ButtonMediumProps {

    label:string,
    bgcolor:string,




}

export const ButtonMedium:React.FC<ButtonMediumProps>=({label,bgcolor}) =>{

const cssclass=`px-4 py-2 rounded-md text-sm mr-2 ${bgcolor}`;
 

 return(

<>
<button className={cssclass}>{label}</button>

</>

 )


}