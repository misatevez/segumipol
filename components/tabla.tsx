'use client'
import { Input } from "@/components/ui/input"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface TablaProps {
  headers: string[];
  rows?: string[][];
  titulo?: string;
  searchPlaceholder?: string;
  buttonText?: string;
  linkButtonAdd: string;
  onDelete: any,
  onEdit:any
}

export function Tabla({
  titulo = "User Data",
  searchPlaceholder = "Search users...",
  headers = [],
  rows = [],
  buttonText = "Add User",
  linkButtonAdd = "/",
  onDelete,
  onEdit
}: TablaProps) {

  const router = useRouter();


  return (
    <div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">{titulo}</h2>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input className="pl-8" placeholder={searchPlaceholder} type="search" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map(header => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} className={cellIndex === 0 ? "font-medium" : ""}>
                    {cell}
                  </TableCell>
                ))}

                <TableCell>
                  <Button  onClick={() => onEdit(row[0])} size="sm" variant="outline">
                    Editar
                  </Button>
                  <Button onClick={() => onDelete(row[0])} className="ml-2" size="sm" variant="outline">

                    Borrar
                  </Button>
                </TableCell>

              </TableRow>


            ))}
          </TableBody>
        </Table>
        <div className="flex justify-end p-4">
          <Link className="p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0FB79D] text-gray-50 hover:bg-[#0FB79D]/90" href={linkButtonAdd}>{buttonText}</Link>
        </div>
      </div>
    </div>
  )
}



function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
