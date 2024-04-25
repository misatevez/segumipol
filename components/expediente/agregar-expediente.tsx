
import { Input } from "@/components/ui/input"

export function AgregarExpediente() {
  return (
<>

        <div className="grid grid-cols-1 gap-2 mb-2">
        <div className="shadow-lg border border-gray-200 p-4 my-2">
        <h1 className="text-lg font-bold mb-2">CREAR EXPEDIENTE</h1>
          <div>
            <label className="block text-sm font-medium mb-1">Expediente N°:</label>
            <Input className="bg-gray-100 p-2" placeholder="08116-2012-0-1801-JP-LA-03" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Proceso:</label>
            <Input className="bg-gray-100 p-2" placeholder="ABREVIADO" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fecha de Inicio:</label>
            <Input className="bg-gray-100 p-2" placeholder="15/12/2021" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Especialidad:</label>
            <Input className="bg-gray-100 p-2" placeholder="LABORAL" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Observación:</label>
            <Input
              className="bg-gray-100 p-2"
              placeholder="ADJ. TICKET ATENCION N° 959049/ANEXO(S) A LA-1J COPIAS SIMPLES"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Estado:</label>
            <Input className="bg-gray-100 p-2" placeholder="EN EJECUCION" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Material(es):</label>
            <Input
              className="bg-gray-100 p-2"
              placeholder="PAGO DE BENEFICIOS SOCIALES Y/O INDEMNIZACION U OTROS BENEFICIOS ECONOMICOS"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fecha Conclusión:</label>
            <Input className="bg-gray-100 p-2" placeholder="----" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Etapa Procesal:</label>
            <Input className="bg-gray-100 p-2" placeholder="GENERAL" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Motivo Conclusión:</label>
            <Input className="bg-gray-100 p-2" placeholder="------" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Sumilla:</label>
            <Input className="bg-gray-100 p-2" placeholder="DDA. PAGO DE REMUNERACIONES" />
          </div>
        </div>
        </div>
        </>
  )
}
