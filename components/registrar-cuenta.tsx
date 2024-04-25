'use client'
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export function FormularioRegistro({
  tipo,
  children,
  area, // Solo necesario para abogados
  titulo = "¡Regístrese!", // Título opcional con valor por defecto
  handleSubmit,
  onChange
}) {
  const esAbogado = tipo === 'abogado';

  const [value, setValue] = useState('');


  const handleValueChange = (value) => {
    setValue(value);
    // Asegúrate que el evento simulado tenga el formato correcto
    onChange({ target: { name: 'area', value: value } });
  };



  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-center">{titulo}</h1>
            <p className="text-lg text-center mt-2">Complete todos los datos</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input name="remember" type="hidden" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              {children}
              {esAbogado && (
                <div>
                  <Label className="sr-only" htmlFor="area">Área de especialidad</Label>
                  <Select name="area" required onValueChange={handleValueChange}>
                    <SelectTrigger className="appearance-none text-left rounded-none relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                      <SelectValue placeholder="Área de especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {area.map(area => (
                        <SelectItem key={area.value} value={area.value}>
                          {area.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                </div>
              )}
            </div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-200 border-transparent text-sm font-medium rounded-md text-white bg-[#0FB79D] hover:bg-[#0FB79D]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-[#0FB79D]"
              type="submit"
            >
              Crear cuenta
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
