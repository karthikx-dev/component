import { Bar, BarChart, XAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


const chartData = [
  {
    month: "January",
    vehicles: 25,
  },
  {
    month: "February",
    vehicles: 50,
  },
  {
    month: "March",
    vehicles: 75,
  },
  {
    month: "April",
    vehicles: 100,
  },
  {
    month: "May",
    vehicles: 125,
  },
  {
    month: "June",
    vehicles: 150,
  },
  {
    month: "July",
    vehicles: 200,
  },
]

const chartConfig = {
  vehicle: {
    label: "Vehicles",
    color: "#2563eb",
  },
}
export default function CustomChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-75 w-full"
    >
      <BarChart
        accessibilityLayer
        data={chartData}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip
          content={<ChartTooltipContent />}
        />

        <Bar
          dataKey="vehicles"
          fill="var(--color-vehicles)"
          radius={6}
        />
      </BarChart>
    </ChartContainer>
  )
}