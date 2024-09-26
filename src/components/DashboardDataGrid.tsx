import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5"

export default function DashboardDataGrid() {
  return (
    <div className="flex w-full gap-4">
      <StatsCardWrappper>
        <div className="rounded-full size-12 flex justify-center items-center bg-sky-500">
          <IoBagHandle className="text-xl text-white" />
        </div>
        <div className="pl-4 ">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$54232</strong>
            <span className="text-sm text-green-500 pl-2">+324</span>
          </div>
        </div>
      </StatsCardWrappper>
      <StatsCardWrappper>
        <div className="rounded-full size-12 flex justify-center items-center bg-orange-600">
          <IoPieChart className="text-xl text-white" />
        </div>
        <div className="pl-4 ">
          <span className="text-sm text-gray-500 font-light">Total Expenses</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
            <span className="text-sm text-red-500 pl-2">-324</span>
          </div>
        </div>
      </StatsCardWrappper>
      <StatsCardWrappper>
        <div className="rounded-full size-12 flex justify-center items-center bg-yellow-400">
          <IoPeople className="text-xl text-white" />
        </div>
        <div className="pl-4 ">
          <span className="text-sm text-gray-500 font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12313</strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </StatsCardWrappper>
      <StatsCardWrappper>
        <div className="rounded-full size-12 flex justify-center items-center bg-green-600">
          <IoCart className="text-xl text-white" />
        </div>
        <div className="pl-4 ">
          <span className="text-sm text-gray-500 font-light">Total Order</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">16432</strong>
            <span className="text-sm text-green-500 pl-2">+40</span>
          </div>
        </div>
      </StatsCardWrappper>
    </div>
  )
}

function StatsCardWrappper(props: React.PropsWithChildren) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{props.children}</div>
}