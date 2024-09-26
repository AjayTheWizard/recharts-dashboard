import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function RootLayout() {
  return (
    <div className="flex flex-row bg-neutral-100 w-screen h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4 overflow-y-scroll h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  )
}