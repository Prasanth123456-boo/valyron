import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";
import { format } from "date-fns";

export default function InternationalSalesReturn() {
  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto">
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden print:shadow-none print:border print:border-gray-300">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white print:bg-white print:text-black print:border-b">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold flex items-center gap-3">
                  <AlertCircle className="w-10 h-10" />
                  CREDIT NOTE
                </h1>
                <p className="text-red-100 print:text-gray-600 mt-2 text-lg">
                  Sales Return • Tax Credit Note
                </p>
              </div>
              <Badge className="text-lg px-6 py-2 bg-white/20 text-white print:bg-red-100 print:text-red-700">
                CREDIT NOTE
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-8 print:p-6 space-y-8">
            {/* Company & Customer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* From (Your Company) */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-800">Issued By:</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="font-bold text-base">Valyron Labs Private Limited</p>
                  <p>123 Tech Park, Calicut<br />Kerala 673001, India</p>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div><strong>GSTIN:</strong> 32AAGCV1234A1Z5</div>
                    <div><strong>PAN:</strong> AAGCV1234A</div>
                  </div>
                  <p><strong>Email:</strong> returns@valyronlabs.com</p>
                </div>
              </div>

              {/* Return From (Customer) */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-gray-800">Returned By:</h3>
                <div className="space-y-3">
                  <Input defaultValue="Acme Corporation Inc." className="font-semibold" />
                  <Textarea defaultValue="123 Broadway Street\nNew York, NY 10001\nUnited States" rows={3} />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Customer VAT/Tax ID</Label>
                      <Input defaultValue="US123456789" />
                    </div>
                    <div>
                      <Label>Place of Supply</Label>
                      <Input defaultValue="New York, USA" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Credit Note & Original Invoice Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <Label className="text-gray-600">Credit Note No.</Label>
                <Input defaultValue="CR-2025-0018" className="font-bold text-lg mt-1 bg-red-50" />
              </div>
              <div>
                <Label className="text-gray-600">Credit Note Date</Label>
                <Input type="date" defaultValue={today} className="mt-1" />
              </div>
              <div>
                <Label className="text-gray-600">Original Invoice No.</Label>
                <Input defaultValue="INV-2025-0047" className="mt-1" />
              </div>
              <div>
                <Label className="text-gray-600">Original Invoice Date</Label>
                <Input type="date" defaultValue="2025-11-24" className="mt-1" />
              </div>
            </div>

            {/* Reason for Return */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <Label className="font-semibold text-amber-900">Reason for Return</Label>
              <Select defaultValue="defective">
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="defective">Defective / Damaged Product</SelectItem>
                  <SelectItem value="wrong">Wrong Item Shipped</SelectItem>
                  <SelectItem value="not-needed">Customer Changed Mind</SelectItem>
                  <SelectItem value="duplicate">Duplicate Order</SelectItem>
                  <SelectItem value="quality">Quality Issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Additional details (optional)" className="mt-3" rows={2} />
            </div>

            {/* Returned Items Table */}
            <div>
              <h3 className="font-bold text-lg mb-4">Returned Items</h3>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead>#</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>HSN/SAC</TableHead>
                    <TableHead className="text-center">Qty</TableHead>
                    <TableHead className="text-right">Unit Price</TableHead>
                    <TableHead className="text-right">Taxable Amt</TableHead>
                    <TableHead className="text-center">Tax Rate</TableHead>
                    <TableHead className="text-right">Tax Credit</TableHead>
                    <TableHead className="text-right font-bold">Total Credit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-red-50/30">
                    <TableCell>1</TableCell>
                    <TableCell className="font-medium">
                      Website Development - Enterprise Dashboard
                    </TableCell>
                    <TableCell>998314</TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                    <TableCell className="text-right">$5,000.00</TableCell>
                    <TableCell className="text-center">18% GST</TableCell>
                    <TableCell className="text-right">$900.00</TableCell>
                    <TableCell className="text-right font-bold text-red-600">
                      -$5,900.00
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Credit Summary */}
            <div className="ml-auto max-w-md bg-red-50 rounded-lg p-6 space-y-3 border border-red-200">
              <div className="flex justify-between text-sm">
                <span>Subtotal Credit</span>
                <span className="font-semibold">-$5,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax Credit (18% GST)</span>
                <span className="font-semibold">-$900.00</span>
              </div>
              <Separator className="bg-red-200" />
              <div className="flex justify-between text-xl font-bold text-red-700">
                <span>Total Credit Amount</span>
                <span>-$5,900.00</span>
              </div>
              <div className="text-sm font-medium pt-3 border-t border-red-200">
                Amount in words: <strong className="text-red-700">
                  Five Thousand Nine Hundred US Dollars Only (Credit)
                </strong>
              </div>
            </div>

            {/* Refund Method */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
              <Label className="font-semibold text-blue-900">Refund Method</Label>
              <Select defaultValue="original">
                <SelectTrigger className="mt-2 max-w-md">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Refund to Original Payment Method</SelectItem>
                  <SelectItem value="bank">Bank Transfer / Wire</SelectItem>
                  <SelectItem value="wallet">Credit to Customer Wallet</SelectItem>
                  <SelectItem value="future">Apply to Future Invoice</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notes */}
            <div>
              <Label>Additional Notes</Label>
              <Textarea
                defaultValue="Credit will be processed within 7 business days after receiving returned goods.\nThank you for your understanding."
                className="mt-2"
                rows={3}
              />
            </div>

            {/* Signature */}
            <div className="flex justify-between items-end mt-16">
              <div className="text-center">
                <div className="border-t-2 border-gray-900 w-64 pt-2">
                  <p className="font-semibold text-lg">Authorized Signatory</p>
                  <p className="text-sm text-gray-600">Valyron Labs Pvt Ltd</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <p>This is a computer-generated Credit Note.</p>
                <p>No signature required.</p>
              </div>
            </div>

            {/* Action Buttons - Hidden on Print */}
            <div className="flex justify-end gap-3 mt-12 print:hidden">
              <Button variant="outline" onClick={() => window.print()}>
                Print Credit Note
              </Button>
              <Button className="bg-red-600 hover:bg-red-700">
                Download PDF
              </Button>
              <Button variant="secondary">
                Email to Customer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-8 print:hidden">
          International Standard Credit Note • GST (India) • VAT (EU/UK) • Sales Return (US) Compliant
        </p>
      </div>
    </div>
  );
}