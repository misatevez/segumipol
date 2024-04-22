
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { IngresarCuenta } from "@/components/ingresar-cuenta";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
   <>
   
   {isSupabaseConnected ? <IngresarCuenta /> :  <Logueado/>}

   </>

  );
}


function Logueado(){
  return  (
<div>
<h1>Usted esta logueado.</h1>
<AuthButton />
</div>


  );
}