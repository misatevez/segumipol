'use client'
import { FormularioRegistro } from '@/components/registrar-cuenta'
import FormField from "@/components/ui/FormField";
import { fieldConfigs, especialidades } from "@/config/formFields";
import { useFormData } from '@/app/hook/useFormData'
import { addRecordWithAuth } from '@/lib/supabaseCrud'

const RegistroCliente = () => {

    const [formData, handleChange] = useFormData(
        {
            nombre: '',  
            apellido: '',
            email: '',
            password: '',
            area: '',
            EsAbogado: true 
        }
    );


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await addRecordWithAuth('Usuarios', formData);
            console.log('Registro exitoso:', result);
            // Aquí puedes manejar acciones post-registro, como redireccionar o mostrar un mensaje
        } catch (error) {
            console.error('Error al registrar:', error.message);
            // Manejar los errores de registro aquí, como mostrar un mensaje de error al usuario
        }
    };

    return (
        <FormularioRegistro handleSubmit={handleSubmit} onChange={handleChange}>
            {Object.values(fieldConfigs).map(config => (
                <FormField
                    key={config.id}
                    {...config}
                    value={formData[config.id]}
                    onChange={handleChange}
                />
            ))}

        </FormularioRegistro>
    );
};

export default RegistroCliente;
