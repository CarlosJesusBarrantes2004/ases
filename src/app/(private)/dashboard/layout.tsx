import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 fixed top-0 left-0 h-full z-40 overflow-y-auto bg-gray-800 text-white p-4">
        <Sidebar></Sidebar>
      </aside>
      <div className="flex-1 ml-64 flex flex-col">
        <Header></Header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
