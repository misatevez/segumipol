import { Input } from "../ui/input"


export const SeguimientoExpediente = () => {
  return (
    <div className="shadow-lg border border-gray-200 p-4 my-2">
        <h2 className="text-lg font-semibold mb-2">SEGUIMIENTO DEL EXPEDIENTE</h2>
        <div className="flex justify-between items-center mb-2" />
        <div className="mb-2">
          <div className="grid grid-cols-1 gap-2 mb-2">
            <div>
              <label className="block text-sm font-medium mb-1">Fecha de Ingreso:</label>
              <Input className="bg-gray-100 p-2" placeholder="18/04/2024 16:22" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Acto:</label>
              <Input className="bg-gray-100 p-2" placeholder="INFORME" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Folios:</label>
              <Input className="bg-gray-100 p-2" placeholder="6" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Proveido:</label>
              <Input className="bg-gray-100 p-2" placeholder="No Proveido" />
            </div>
          </div>
          <Input
            className="bg-gray-100 p-2"
            placeholder="ADULTA MAYOR Y DIABETICA SOLICITA DECLARAR INFUNDADA OPOSICION DILATORIA DE NAVARRETE Y SE GENERE LA ORDEN DE PAGO DE DEPOSITO JUDICIAL ELECTRONICO A FAVOR DE LA DEMANDANTE"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Descripción de Usuario:</label>
          <Input className="bg-gray-100 p-2" placeholder="INGRESADO POR:USUARIO DE MESAS PARTES WEB" />
        </div>
      </div>
  )
}
