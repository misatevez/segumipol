
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export function SeleccionarTipoCuenta() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-center">¡Hola! Bienvenido a nuestra plataforma</h1>
    <p className="text-lg text-center mt-2 ">Debe seleccionar la opcion deseada.</p>
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-8">
    
      <Card className="w-full md:w-[350px] shadow-lg">
      <Link href={"/register/lawyer"}>
        <CardContent className="flex flex-col items-center p-4 cursor-pointer hover:bg-gray-50">
        <BriefcaseIcon className="h-8 w-8 text-[#0FB79D]" />
          <h2 className="text-lg font-semibold mt-4">SOY ABOGADO</h2>
          <p className="text-sm text-center mt-2">Soy abogado y quiero registrarme en su plataforma.</p>
        </CardContent>
        </Link>
      </Card>

      
      <Card className="w-full md:w-[350px] shadow-lg">
      <Link href={"/register/client"}>
        <CardContent className="flex flex-col items-center p-4 cursor-pointer hover:bg-gray-50">
        <UserIcon className="w-8 h-8 text-[#0FB79D]" />
          <h2 className="text-lg font-semibold mt-4">SOY CLIENTE</h2>
          <p className="text-sm text-center mt-2">Soy cliente y quiero ver mi expediente en su plataforma</p>
        </CardContent>
        </Link>
      </Card>
    </div>
  </div>
</div>

  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}