import { ButtonMedium } from "../common/Buttons";



const Tabs=[
    {id:1 , label:"DasgBoard"},
    {id:2 , label:"all Doctors"},
    {id:3 , label:"All patients"},
]


const Header:React.FC=()=>{




return(


    <>
      <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Hospital Management</h1>
        <nav>
          {Tabs.map(tab => (
            <ButtonMedium key={tab.id} label={tab.label} bgcolor="bg-cyan-400" />
          ))}
        </nav>
      </div>
    </header>
    
    
    
    
    </>


);


}

export default Header;