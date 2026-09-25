import CustomAreaChart from "./components/CustomAreaChart"
import CustomChart from "./components/CustomChart"
import CustomTable from "./components/CustomTable"
import ToastDemo from "./components/ToastDemo"

import { Toaster } from "@/components/ui/toast"

function App() {
  return (
    <>
      <div className="p-6">
        <h1 className="font-bold mb-8">
          Area chart
        </h1>

        <CustomAreaChart />
      </div>

      <div className="w-full max-w-2xl p-4">
        <h1 className="font-bold mt-10">
          Table view
        </h1>

        <CustomChart />
      </div>

      <div className="w-full max-w-2xl p-4">
        <h1 className="mt-10 mb-4 font-bold">
          Payment Table
        </h1>

        <CustomTable />
      </div>

      <div className="w-full max-w-2xl p-4">
        <h1 className="mt-10 mb-4 font-bold">
          Toast message
        </h1>
          <ToastDemo />
          <Toaster />
      </div>
    </>
  )
}

export default App