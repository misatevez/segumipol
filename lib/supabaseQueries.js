import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

// Función para obtener todos los registros de una tabla
export async function fetchAllRecords(tableName) {
    const { data, error } = await supabase.from(tableName).select("*");
    if (error) throw error;
    return data;
}

// Función para obtener un registro específico por ID y columna
export async function fetchRecordById(tableName, recordId, columnName) {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .eq(columnName, recordId)
        .single();
    if (error) throw error;
    return data;
}

// Función para obtener registros que cumplen una condición específica
export async function fetchRecordsByCondition(tableName, condition) {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .match(condition);
    if (error) throw error;
    return data;
}
