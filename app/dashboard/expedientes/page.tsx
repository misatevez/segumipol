import { Tabla } from "@/components/tabla";

const page = () => {

    const headers = [
        "ID", "Expediente N°", "Fecha de Inicio", "Estado", "Etapa Procesal", "Abogado", "Acciones"
    ]

    const rows = [
       [ "1", "08116-2012-0-1801-JP-LA-03", "15/12/2021", "EN EJECUCION", "GENERAL", "BRYAN"]
    ]

    return (
        <Tabla titulo="Expedientes" headers={headers} rows={rows} buttonText="Agregar" searchPlaceholder="Buscar expedientes" linkButton="/dashboard/expedientes/add" />
    );
}


export default page