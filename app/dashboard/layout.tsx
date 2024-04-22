import { Dashboard } from "@/components/dashboard";



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
    
      <>
       <Dashboard />
       {children}
       </>
    );
}


