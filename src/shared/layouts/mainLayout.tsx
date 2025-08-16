import type { ReactNode } from "react";
import { Header, Footer } from "@/shared//ui";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <div className="">
        <header className="absolute top-0 left-0 w-full z-20">
          <Header />
        </header>
        <main className="flex-1">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
