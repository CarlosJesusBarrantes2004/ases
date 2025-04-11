import Link from "next/link";
import "../../globals.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <header className="bg-[#212121] text-white p-4">
            <nav>
              <ul>
                <li className="text-sm font-semibold hover:underline hover:underline-offset-1 hover:cursor-pointer">
                  <Link href={"/"}>Regresar</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto flex justify-center items-center text-[#212121] flex-grow px-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default AuthLayout;
