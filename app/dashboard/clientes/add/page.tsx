
import {FormularioRegistro} from "@/components/registrar-cuenta";
import FormField from "@/components/ui/FormField";
import { fieldConfigs } from "@/config/formFields";

const RegistroCliente = () => {
    return (
      <FormularioRegistro tipo="cliente">
        {Object.values(fieldConfigs).map(config => (
            <FormField key={config.id} {...config} />
        ))}

      </FormularioRegistro>
    );
}

export default RegistroCliente;
