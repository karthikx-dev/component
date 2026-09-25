import { payments } from "./payments"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function CustomTable() {
  return (
    <div className="w-full rounded-lg border">
      <Table>

        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  )
}

export default CustomTable