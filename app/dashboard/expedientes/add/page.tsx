import { AgregarExpediente } from "@/components/expediente/agregar-expediente";
import { PartesProcesales } from "@/components/expediente/partes-procesales";
import { SeguimientoExpediente } from "@/components/expediente/seguimiento-expediente";

const page = () => {
    return (
        <div key="1" className="bg-white p-4 shadow-md">
        <div className="shadow-lg border border-gray-200 p-4 my-2">

       <AgregarExpediente />
       <PartesProcesales />
       <SeguimientoExpediente />
       </div>
       </div>
    );
}


export default page