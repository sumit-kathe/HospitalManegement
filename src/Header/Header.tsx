import { ButtonMedium } from "../common/Buttons";
import logo from '../logo.jpg'


const Tabs=[
    {id:1 , label:"DasgBoard" , path: '/'},
    {id:2 , label:"all Doctors", path: '/doctor'},
    {id:3 , label:"All patients", path: '/patint'},
]


const Header:React.FC=()=>{




return(


    <>
      <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">

        
        <img className="rounded-md p-0 m-0 w-24 h-12"  src={logo}  />
        <div> <h1 className="text-xl">Hospital Management</h1>
        </div>
        <nav>
          {Tabs.map(tab => (
            
            <ButtonMedium key={tab.id} label={tab.label} bgcolor="bg-cyan-400" path={tab.path} />
          ))}
        </nav>
      </div>
    </header>
    
    
    
    
    </>


);


}

export default Header;