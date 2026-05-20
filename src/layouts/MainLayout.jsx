import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f4fbff] text-[#0f172a]">
      
      <Navbar />

      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;