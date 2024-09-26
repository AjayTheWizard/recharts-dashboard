import BuyersPieChart from "../components/BuyersPieChart";
import DashboardDataGrid from "../components/DashboardDataGrid";
import PopularProducts from "../components/PopularProducts";
import RecentOrders from "../components/RecentOrders";
import TransactionChart from "../components/TransactionChart";

export default function DashBoardPage() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardDataGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyersPieChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  )
}