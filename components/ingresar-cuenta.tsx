'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Imagen from "@/app/logo.png"
import Image from 'next/image'
import { useRouter } from "next/navigation"

export function IngresarCuenta() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Image src={Imagen} width={300} height={300} alt={Imagen as any} className="mx-auto" />

          <h2 className="text-center text-2xl font-bold text-gray-900 ">Ingreso a la plataforma</h2>

        <div className="mt-8 space-y-6" >
          <input name="remember" type="hidden" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Label className="sr-only" htmlFor="email-address">
                Correo Electronico
              </Label>
              <Input
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-200 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Correo electronico"
                required
                type="email"
              />
            </div>
            <div>
              <Label className="sr-only" htmlFor="password">
                Contraseña
              </Label>
              <Input
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-200  placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Contraseña"
                required
                type="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Input
                className="h-4 w-4 text-[#0FB79D] focus:text-[#0FB79D] border-gray-300 rounded"
                id="remember_me"
                name="remember_me"
                type="checkbox"
              />
              <Label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
                Recuerdame
              </Label>
            </div>
            <div className="text-sm">
              <Link className="font-medium text-[#0FB79D] hover:text-[#0FB79D]/90" href="#">
                Perdiste tu contraseña?
              </Link>
            </div>
          </div>
          <div>
            <Button
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-200 border-transparent text-sm font-medium rounded-md text-white bg-[#0FB79D] hover:bg-[#0FB79D]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-[#0FB79D] "
              onClick={() => {router.push('/dashboard')}}
            >
              Ingresar
            </Button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 ">
            No tienes cuenta?
            <Link className="font-medium text-[#0FB79D] hover:text-[#0FB79D]/90 ml-1" href="/register/client">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
