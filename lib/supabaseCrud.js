import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

// Función para agregar un registro a una tabla
export async function addRecord(tableName, record) {
  const { data, error } = await supabase.from(tableName).insert([record]);
  if (error) throw error;
  return data;
}

export async function addRecordWithAuth(tableName, userData) {
  const { email, password, nombre, apellido, area, EsAbogado   } = userData;

  try {
    // Primero, intenta crear el usuario en la plataforma de autenticación
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      console.error('Error during sign up:', signUpError.message);
      throw signUpError;
    }

    if (!authData || !authData.user) {
      throw new Error("No user data returned from auth signup.");
    }

    // Accede al ID del usuario desde el objeto user retornado
    const userId = authData.user.id;
    const record = { user_id: userId, nombre, apellido, area, email, EsAbogado  };

    // Inserta los detalles adicionales del usuario en la base de datos
    const { data, error: insertError } = await supabase.from(tableName).insert([record]);
    if (insertError) {
      console.error('Error during data insertion:', insertError.message);
      throw insertError;
    }

    return { user: authData.user, data }; // Devuelve la información del usuario y los datos insertados
  } catch (error) {
    console.error('Error al registrar el usuario y añadir el registro:', error.message);
    throw error; // Propaga el error para manejarlo en la función llamadora
  }
}

// Función para eliminar un registro de una tabla
export async function deleteRecord(tableName, recordId, primaryKey = 'id') {
  const { data, error } = await supabase
    .from(tableName)
    .delete()
    .match({ [primaryKey]: recordId });  // Utiliza la clave primaria especificada

  if (error) {
    console.error('Error deleting record:', error.message);
    throw error;
  }

  return data;
}


// Función para eliminar un usuario de Supabase Auth
export async function deleteUserFromAuth(userId) {
  try {
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      if (authError) {
          console.error('Error deleting user from Auth:', authError.message);
          throw authError; // Propaga el error para manejarlo adecuadamente
      }

      return { message: "User deleted successfully from Auth" };
  } catch (error) {
      console.error('Error deleting user:', error.message);
      throw error; // Propaga el error para asegurar que se maneje fuera de la función
  }
}


// Función para actualizar un registro completo en una tabla
export async function updateRecord(tableName, recordId, recordData) {
  const { data, error } = await supabase
    .from(tableName)
    .update(recordData)
    .match({ id: recordId });  // Asumimos que 'id' es la clave primaria
  if (error) throw error;
  return data;
}
