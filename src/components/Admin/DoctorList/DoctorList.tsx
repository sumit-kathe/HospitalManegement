import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallDoctors } from "../../../mainstore/admin/admin-action";
import TableCom from "../../../common/TableCom";

const DoctorList =()=>{


    const dispatch:any= useDispatch()


    const data= useSelector((state:any)=>state.Doctors)
 
    const allDoctors=data.doctor.doctors;

           console.log("data",allDoctors)

        //    const tHead = Object.keys(allDoctors[0]);
  const tHead = ["id","Type","Name","Email","PassWord"]

           const tBody = [0,"doctor","choudhari","choudhri@yahoo.com","sweetheart@123456"]
           
          




           console.log("keys of all doctor",tHead)




    //  const {doctor}=data;

    //  doctor.doctors;



    //  console.log("allDoctors ",allDoctors)

    //   console.log(" doctor", doctor.doctors);

    useEffect(()=>{

        dispatch(getallDoctors());




    },[])



     const listOfDoctor= allDoctors.map((doc:any ,index:any)=>{

        //  console.log("doc map element",doc);
        //  console.log("doc map element",index);

        return(
            <>
            <li key={index}>{doc.name}====conctAt === {doc.email}</li>
            
            
            </>
        )


       
     })


    return(


        <>
        <div >DoctorList section</div>
          <ul>
        {listOfDoctor}

          </ul>

          {/* <TableCom tHead={tHead} tBody={tBody} ></TableCom> */}

        
        </>
    )
}

export default DoctorList;