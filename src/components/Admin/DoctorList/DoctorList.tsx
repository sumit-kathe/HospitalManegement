import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallDoctors } from "../../../mainstore/admin/admin-action";

const DoctorList =()=>{


    const dispatch:any= useDispatch()


    const data= useSelector((state:any)=>state.Doctors)


     const {doctor}=data;

     const allDoctors= doctor.doctors;



      console.log(" doctor", doctor.doctors);

    useEffect(()=>{

        dispatch(getallDoctors());




    },[])



     const listOfDoctor= allDoctors.map((doc:any)=>{

        return(
            <>
            <li>{doc.name}====conctAt === {doc.email}</li>
            
            
            </>
        )


       
     })
    return(


        <>
        <div>DoctorList section</div>

        <ul>


        </ul>
        {listOfDoctor}


        
        </>
    )
}

export default DoctorList;