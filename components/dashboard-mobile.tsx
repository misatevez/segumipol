'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function DashboardMobile() {
  const router = useRouter();
  return (
    <>
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 space-y-4">        
<Button onClick={ () => router.push('/dashboard-client/perfil') } className="w-full h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
        <UserIcon className="w-5 h-5 mb-1 text-gray-500" />
        <span className="text-lg font-semibold text-gray-700">Mi perfil</span>
      </Button>
      <Button onClick={ () => router.push('/dashboard-client/expedientes') } className="w-full h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
        <FolderIcon className="w-5 h-5 mb-1 text-gray-500"  />
        <span className="text-lg font-semibold text-gray-700">Mis expedientes</span>
      </Button>

      <Button className="w-full h-24 flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
        <UsersIcon className="w-5 h-5 mb-1 text-gray-500"  />
        <span className="text-lg font-semibold text-gray-700">Informacion de contacto</span>
      </Button>
    </div>
    </>
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


function FolderIcon(props) {
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
