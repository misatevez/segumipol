'use client'
import { fetchRecordById } from "@/lib/supabaseQueries";
import { useEffect, useState } from "react";


const Page = ({params}:any) => {

const user_id = params.slug;

const [user, setUser] = useState();

useEffect(() => {
     const fetchData = async () => {
    try{
        const data = await fetchRecordById('Usuarios', user_id, 'user_id');
        setUser(data);
    
} catch (error:any) {
    console.error("Error fetching abogados:", error.message);
}
     }
     fetchData()
    }
, []);

  return (
    <div>Hola  {JSON.stringify(user)}</div>
  )
}

export default Page;