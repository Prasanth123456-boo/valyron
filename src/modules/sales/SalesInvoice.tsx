import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Plus, Eye, Download, Send } from "lucide-react";
import { format } from "date-fns";

// Mock data for saved invoices
const mockInvoices = [
  { id: "INV-2025-0047", date: "2025-11-24", customer: "Acme Corporation", amount: "$5,900.00", status: "Paid" },
  { id: "INV-2025-0046", date: "2025-11-20", customer: "TechCorp Ltd", amount: "₹4,25,000.00", status: "Sent" },
  { id: "INV-2025-0045", date: "2025-11-18", customer: "Global Solutions", amount: "$12,400.00", status: "Draft" },
  { id: "INV-2025-0044", date: "2025-11-15", customer: "EuroTech GmbH", amount: "€8,900.00", status: "Paid" },
];

export default function SalesInvoiceWithTabs() {
  const [activeTab, setActiveTab] = useState("create");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sales Invoices</h1>
          <p className="text-gray-600 mt-1">Create and manage professional tax invoices</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              All Invoices ({mockInvoices.length})
            </TabsTrigger>
            <TabsTrigger value="create" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Invoice
            </TabsTrigger>
          </TabsList>

          {/* ========== CREATE INVOICE TAB ========== */}
          <TabsContent value="create" className="mt-0">
            <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-4xl font-bold">TAX INVOICE</h1>
                    <p className="text-blue-100 mt-1">Create New Invoice</p>
                  </div>
                  <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20">
                    DRAFT
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-8 space-y-8">
                {/* Your existing invoice form here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">From:</h3>
                    <Input defaultValue="Valyron Labs Private Limited" className="font-semibold" />
                    <Textarea defaultValue="123 Tech Park, Calicut\nKerala 673001, India" rows={3} className="mt-3" />
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div><Label>GSTIN</Label><Input defaultValue="32AAGCV1234A1Z5" /></div>
                      <div><Label>PAN</Label><Input defaultValue="AAGCV1234A" /></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Bill To:</h3>
                    <Input defaultValue="Acme Corporation Inc." className="font-semibold" />
                    <Textarea defaultValue="123 Broadway Street\nNew York, NY 10001\nUnited States" rows={3} className="mt-3" />
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><Label>Invoice No.</Label><Input defaultValue="INV-2025-0048" className="font-bold" /></div>
                  <div><Label>Date</Label><Input type="date" defaultValue="2025-11-25" /></div>
                  <div><Label>Due Date</Label><Input type="date" defaultValue="2025-12-25" /></div>
                  <div>
                    <Label>Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Items Table */}
                <div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>#</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>HSN/SAC</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead className="text-right">Rate</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Website Development - Enterprise Dashboard</TableCell>
                        <TableCell>998314</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-right">$5,000.00</TableCell>
                        <TableCell className="text-right font-bold">$5,900.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Button variant="outline" size="sm" className="mt-4">+ Add Item</Button>
                </div>

                {/* Totals */}
                <div className="ml-auto max-w-md bg-blue-50 rounded-lg p-6 border">
                  <div className="flex justify-between text-lg"><span>Subtotal</span><strong>$5,000.00</strong></div>
                  <div className="flex justify-between text-lg"><span>Tax (18%)</span><strong>$900.00</strong></div>
                  <Separator className="my-3" />
                  <div className="flex justify-between text-2xl font-bold text-blue-700">
                    <span>Total</span>
                    <span>$5,900.00</span>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-8">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Send Invoice</Button>
                  <Button onClick={() => window.print()}>Print</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ========== ALL INVOICES TAB ========== */}
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">All Invoices</CardTitle>
                <p className="text-gray-600">View and manage all your sent and draft invoices</p>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Invoice No.</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockInvoices.map((inv) => (
                        <TableRow key={inv.id} className="hover:bg-gray-50 transition">
                          <TableCell className="font-medium">{inv.id}</TableCell>
                          <TableCell>{format(new Date(inv.date), "dd MMM yyyy")}</TableCell>
                          <TableCell>{inv.customer}</TableCell>
                          <TableCell className="text-right font-semibold">{inv.amount}</TableCell>
                          <TableCell>
                            <Badge variant={inv.status === "Paid" ? "default" : inv.status === "Sent" ? "secondary" : "outline"}>
                              {inv.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center gap-2">
                              <Button size="icon" variant="ghost"><Eye className="h-4 w-4" /></Button>
                              <Button size="icon" variant="ghost"><Download className="h-4 w-4" /></Button>
                              <Button size="icon" variant="ghost"><Send className="h-4 w-4" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-sm text-gray-600">Showing 4 of 48 invoices</p>
                  <Button variant="outline">Load More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}