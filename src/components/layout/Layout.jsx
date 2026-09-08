import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LoadingScreen from "./LoadingScreen";

export default function Layout() {
  return (
    <>
      <LoadingScreen />

      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
}