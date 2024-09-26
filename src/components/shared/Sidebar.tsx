import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants/links";
import type { SideBarLink } from "../../lib/constants/links";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 p-3 bg-neutral-800 text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish size={24} />
        <span className="text-neutral-100 font-lg">OpenChart</span>
      </div>
      <div className="flex-1 flex flex-col py-8">
        {DASHBOARD_SIDEBAR_LINKS.map(link => (
          <SideBarLink key={link.key} item={link} />
        ))}
      </div>
      <div className="flex flex-col pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(link => (
          <SideBarLink key={link.key} item={link} />
        ))}
        <Link className={`flex items-center cursor-pointer gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-red-400`} to={"/login"}>
          <span className="text-xl"><HiOutlineLogout /></span>
          Logout
        </Link>
      </div>
    </div>
  )
}

function SideBarLink({ item }: { item: SideBarLink, danger?: boolean }) {
  const { pathname } = useLocation();
  console.log(pathname, item.path);

  return (
    <Link className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ${pathname === item.path ? "bg-neutral-700 text-white" : "text-neutral-400"}`} to={item.path}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  )
}