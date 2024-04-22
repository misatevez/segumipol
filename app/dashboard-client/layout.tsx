import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";
import InfoButton from "@/components/InfoButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main>{children}</main>
      <footer className="flex items-center justify-between p-4 bg-[#0FB79D] text-white">
        <BackButton />
        <HomeButton />
        <InfoButton />
      </footer>
    </div>
  );
};

export default Layout;
