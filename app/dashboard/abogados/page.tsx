import { Tabla } from "@/components/tabla";

const page = () => {

    const headers = [
        "ID", "Nombre", "Apellido", "N° Cip","Area", "Email", "Acciones"
    ]

    const rows = [
       [ "1", "Bryan", "Segumipol", "12345678", "Penal", "Bryan@segumipol.com"]
    ]

    return (
        <Tabla titulo="Abogados" headers={headers} rows={rows} buttonText="Agregar" searchPlaceholder="Buscar abogados" linkButton="/dashboard/abogados/add" />
    );
}


export default page