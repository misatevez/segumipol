import { Tabla } from "@/components/tabla";

const page = () => {

    const headers = [
        "ID", "Nombre", "Apellido", "N° Cip", "Email", "Acciones"
    ]

    const rows = [
       [ "1", "Cynthia", "Segumipol", "12345678", "Cynthia@segumipol.com"]
    ]

    return (
        <Tabla titulo="Clientes" headers={headers} rows={rows} buttonText="Agregar" searchPlaceholder="Buscar clientes" linkButton="/dashboard/clientes/add" />
    );
}


export default page