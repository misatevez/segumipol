import { Input } from "../ui/input"


export const PartesProcesales = () => {
  return (
    <div className="shadow-lg border border-gray-200 p-4 my-2">
    <h2 className="text-lg font-semibold mb-2">PARTES PROCESALES</h2>
    <div className="mb-2">
      <div className="grid grid-cols-1 gap-2 mb-2">
        <div>
          <label className="block text-sm font-medium mb-1">Apellido Paterno / Razón Social:</label>
          <Input className="bg-gray-100 p-2" placeholder="---" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Apellido Materno:</label>
          <Input className="bg-gray-100 p-2" placeholder="---" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nombres:</label>
          <Input className="bg-gray-100 p-2" placeholder="---" />
        </div>
      </div>
    </div>
  </div>
  )
}
