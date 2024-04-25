'use client'
import { Tabla } from "@/components/tabla";
import { deleteRecord, deleteUserFromAuth } from "@/lib/supabaseCrud";
import { fetchRecordsByCondition } from '@/lib/supabaseQueries';  
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    type MyArrayType = any[][]; 
    const [rows, setRows] = useState<MyArrayType>([]);
    const [refreshCount, setRefreshCount] = useState(0);  // Contador para forzar la recarga de datos

    const headers = [
        "ID", "Nombre", "Apellido", "Area", "Email", "Acciones"
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRecordsByCondition("Usuarios", { EsAbogado: true });
                const formattedRows = data.map(user => [
                    user.user_id,
                    user.nombre,
                    user.apellido,
                    user.area,
                    user.email,
                ]);

                setRows(formattedRows);
            } catch (error:any) {
                console.error("Error fetching abogados:", error.message);
            }
        };

        fetchData();
    }, [refreshCount]);  // Dependencia en refreshCount

    const handleDelete = async (user_id:any) => {
        try {
            // Primero elimina el usuario de la base de datos (ajusta esta llamada a tu función específica)
            const deleteData = await deleteRecord("Usuarios", user_id, 'user_id');
            console.log('Usuario borrado de la base de datos:', deleteData);
    
            // Si la eliminación en la base de datos es exitosa, procede a eliminarlo de Auth
            const authDeleteResponse = await deleteUserFromAuth(user_id);
            console.log(authDeleteResponse.message);
    
            // Incrementa refreshCount para reactivar useEffect y recargar los datos
            setRefreshCount(prev => prev + 1);
        } catch (error:any) {
            console.error("Error deleting user:", error.message);
        }
    };

    const handleEdit = async (user_id:any ) => {
        router.push(`/dashboard/abogados/${user_id}`)
    }

    return (
        <Tabla 
            titulo="Abogados" 
            headers={headers} 
            rows={rows} 
            buttonText="Agregar" 
            searchPlaceholder="Buscar abogados" 
            linkButtonAdd="/dashboard/abogados/add" 
            onDelete={handleDelete}
            onEdit={handleEdit}
        />
    );
};

export default Page;
