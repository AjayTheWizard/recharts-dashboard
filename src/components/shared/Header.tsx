import { Menu, MenuButton, MenuItem, MenuItems, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-14 px-4 flex justify-between items-center">
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => {
            return (
              <>
                <PopoverButton className={`rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 ${open && "bg-gray-100"}`}>
                  <HiOutlineChatAlt fontSize={24} />
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  transition
                  className="flex absolute right-0 z-10 mt-5 w-80 flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-3">
                    <strong className='text-gray-700 font-medium'>
                      Messages
                    </strong>
                    <div className='mt-2 py-1 text-sm'>
                      This is message panel with popover
                    </div>
                  </div>
                </PopoverPanel>
              </>
            );
          }}
        </Popover>
        <Popover className="relative">
          {({ open }) => {
            return (
              <>
                <PopoverButton className={`rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 ${open && "bg-gray-100"}`}>
                  <HiOutlineBell fontSize={24} />
                </PopoverButton>
                <PopoverPanel
                  anchor="bottom"
                  transition
                  className="flex absolute right-0 z-10 mt-5 w-80 flex-col transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-3">
                    <strong className='text-gray-700 font-medium'>
                      Messages
                    </strong>
                    <div className='mt-2 py-1 text-sm'>
                      This is Notification panel with popover
                    </div>
                  </div>
                </PopoverPanel>
              </>
            );
          }}
        </Popover>
        <Menu as={"div"} className="inline-block relative text-left">
          <div>
            <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className='sr-only'>Open User Menu</span>
              <div className="size-10 rounded-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://api.multiavatar.com/Binx Bond.png)" }}>
                <span className='sr-only'>John Doe</span>
              </div>
            </MenuButton>
            <MenuItems className="origin-top-right z-10 absolute right-0 mt-4 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ focus }) =>
                  <div onClick={() => navigate("/profile")} className={`text-gray-700 cursor-pointer px-4 py-2 data-[focus]:bg-gray-200 block ${focus && "bg-gray-100"}`}>
                    Your Profile
                  </div>
                }
              </MenuItem>
              <MenuItem>
                {({ focus }) =>
                  <div onClick={() => navigate("/settings")} className={`text-gray-700 cursor-pointer px-4 py-2 data-[focus]:bg-gray-200 block ${focus && "bg-gray-100"}`}>
                    Settings
                  </div>
                }
              </MenuItem>
              <MenuItem>
                {({ focus }) =>
                  <div onClick={() => navigate("/settings")} className={`text-gray-700 cursor-pointer px-4 py-2 data-[focus]:bg-gray-200 block ${focus && "bg-gray-100"}`}>
                    Logout
                  </div>
                }
              </MenuItem>
            </MenuItems>
          </div>
        </Menu>
      </div>
    </div>
  )
}