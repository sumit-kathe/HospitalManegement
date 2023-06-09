

const TableCom: React.FC<{
    tHead: any;
    tBody: any;
}>= (props) => {
    const { tHead, tBody } = props;

 const tHeadData = tHead.map((thead:any,index:any)=>{

     return(
        
        <thead key={index} className="bg-gray-100">
     <tr>
       <th className="py-2 px-4">{thead[index]}</th>
      
     </tr>
   </thead>

     )


    
 }) 

 const tBodyData = tBody.map((tbody:any,index:any)=>{

    return(
       
       <thead key={index} className="bg-gray-100">
    <tr>
      <th className="py-2 px-4">{tbody[index]}</th>
     
    </tr>
  </thead>

    )


   
}) 




    return(

        <>
        <table className="border-collapse border border-gray-300">
        {tHeadData}
        <tbody>
        {tBodyData}
       
    </tbody>

        </table>
        </>
    )
} 

export default TableCom;