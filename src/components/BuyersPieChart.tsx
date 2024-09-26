import { Cell, Legend, Pie, PieChart, PieLabel, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Male', value: 540 },
  { name: 'Female', value: 620 },
  { name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel: PieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function BuyersPieChart() {
  return (
    <div className="w-[30%] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-2">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              label={renderCustomizedLabel}
              labelLine={false}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}