import { useSelector } from "react-redux";
import { ButtonMedium } from "../common/Buttons";
import logo from '../logo.jpg'
import Erorr from "../common/Erorr";



const adminTabs=[
    {id:1 , label:"DashBoard" , path: '/admin'},
    {id:2 , label:"all Doctors", path: '/admin/doctor'},
    {id:3 , label:"All patients", path: '/admin/patint'},
]
const userTab=[
  {id:1 , label:" My Profile" , path: '/user/profile'},
  {id:2 , label:" Book Appointment", path: '/user/bookappointment'},
  {id:3 , label:"My Appointment", path: '/user/myappointment'},
]
const doctorTab=[
  {id:1 , label:"Profile" , path: '/doctor/profile'},
  {id:2 , label:"SetAppointment", path: '/doctor/setappointment'},
  {id:3 , label:"My Appointment", path: '/doctor/myappointment'},
]


const Header:React.FC=()=>{

  const {userData} = useSelector((state:any)=> state.user)
  console.log("data from redux  toolkit in heder to check the type",userData)

const SeletingTabs = userData.type === "user" ? userTab : userData.type === "doctor" ? doctorTab :adminTabs ;



return(
 

    <>
      <header className="bg-sky-600 text-white p-4">
      <div className="flex items-center justify-between">

        
        <img className="rounded-md p-0 m-0 w-24 h-12"  src={logo}  />
        <div> <h1 className="text-[1.550rem] font-bold">Hospital Management</h1>
        </div>
        <nav>
          {SeletingTabs.map((tab:any) => (
            
            <ButtonMedium key={tab.id} label={tab.label} bgcolor="bg-cyan-400" path={tab.path} />
          ))}
        </nav>
      </div>
    </header>
    {/* <Erorr></Erorr> */}
    
    
    
    
    </>


);


}

export default Header;