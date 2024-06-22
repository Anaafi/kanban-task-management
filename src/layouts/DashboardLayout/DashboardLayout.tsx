import { Outlet } from "react-router-dom";
import { SideNav } from "../../components/SideNav";
import { NavBar } from "../../components/NavBar";

export function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden relative">
      <div>
        <NavBar />
      </div>

      <div className="grid grid-cols-[300px,calc(100%_-_300px)] h-screen">
        <SideNav />
        <Outlet />
      </div>
    </div>
  );
}
