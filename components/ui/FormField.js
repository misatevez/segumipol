import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const FormField = ({ id, label, type = "text", placeholder, required = false, value, onChange }) => {
    return (
        <div>
            <Label className="sr-only" htmlFor={id}>{label}</Label>
            <Input
                id={id}
                name={id}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}        // Agregar para controlar el valor del campo
                onChange={onChange}  // Agregar para manejar cambios
            />
        </div>
    );
};

export default FormField;
