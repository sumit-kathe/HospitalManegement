import { allDoctor } from "./admin-store";



export const getallDoctors = ()=>{


    return async(dispatch:any)=>
{

const fetchDoc = await fetch("http://localhost:3001/admin/doctors");
// 'http://localhost:3001/admin/doctors'

const ResponseDoc = await fetchDoc.json();

const {doctors}=ResponseDoc; // array he ek

console.log("doctors before store",doctors)

console.log("ResponseDoc",ResponseDoc)

dispatch(allDoctor(ResponseDoc))

}}