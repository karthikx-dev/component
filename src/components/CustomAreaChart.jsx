import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "Apr 1", desktop: 222, mobile: 150 },
  { date: "Apr 8", desktop: 409, mobile: 520 },
  { date: "Apr 15", desktop: 120, mobile: 2070 },
  { date: "Apr 22", desktop: 224, mobile: 170 },
  { date: "Apr 30", desktop: 454, mobile: 380 },
  { date: "May 7", desktop: 388, mobile: 300 },
  { date: "May 14", desktop: 448, mobile: 490 },
  { date: "May 21", desktop: 82, mobile: 640 },
  { date: "May 21", desktop: 82, mobile: 640 },
  // { date: "May 28", desktop: 233, mobile: 690 },
  // { date: "Jun 7", desktop: 323, mobile: 670 },
  // { date: "Jun 14", desktop: 426, mobile: 680 },
  // { date: "Jun 21", desktop: 317, mobile: 670 },
  // { date: "Jun 30", desktop: 446, mobile: 1000 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
}

function CustomAreaChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-75 w-full"
    >
      <AreaChart data={chartData}>
        <defs>
          <linearGradient
            id="fillDesktop"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.1}
            />
          </linearGradient>

          <linearGradient
            id="fillMobile"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="5%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />

        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="dot"
            />
          }
        />

        <Area
          dataKey="mobile"
          type="natural"
          fill="url(#fillMobile)"
          stroke="var(--color-mobile)"
          stackId="a"
        />

        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          stroke="var(--color-desktop)"
          stackId="a"
        />

        <ChartLegend
          content={<ChartLegendContent />}
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default CustomAreaChart