import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

function ToastDemo() {
  return (
    <Button
      onClick={() => {
        toast.add({
          title: "Success",
          description: "Payment completed successfully.",
          type: "success",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export default ToastDemo