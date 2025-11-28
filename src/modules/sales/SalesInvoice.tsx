import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Plus, Eye, Download, Send } from "lucide-react";
import { format } from "date-fns";

// Fixed Imports
import LedgerAutoComplete from "@/components/CommonComponents/LedgerAutoComplete";
import InvoiceItemsTable from "@/components/ItemTable/InvoiceItemsTable"; // This is the correct one!
import { Label } from "@radix-ui/react-dropdown-menu";

// Products & Ledgers (were missing!)
const products = [
  { id: 1, name: "Website Development", description: "Full-stack web app", hsnSac: "998314", rate: 75000, taxRate: 18 },
  { id: 2, name: "Mobile App Development", description: "React Native app", hsnSac: "998314", rate: 120000, taxRate: 18 },
  { id: 3, name: "API Integration", description: "Third-party API setup", hsnSac: "998319", rate: 25000, taxRate: 18 },
];

const ledgers = [
  { id: 1, name: "Acme Corporation", gstin: "27AAECA1234A1Z5", address: "Mumbai, India" },
  { id: 2, name: "TechCorp Ltd", gstin: "29AABCU4321B1Z6", address: "Bangalore, India" },
  { id: 3, name: "Global Solutions", gstin: "06AAECG5678C1Z4", address: "New York, USA" },
];

// Mock invoices
const mockInvoices = [
  { id: "INV-2025-0047", date: "2025-11-24", customer: "Acme Corporation", amount: "₹5,90,000", status: "Paid" },
  { id: "INV-2025-0046", date: "2025-11-20", customer: "TechCorp Ltd", amount: "₹4,25,000", status: "Sent" },
  { id: "INV-2025-0045", date: "2025-11-18", customer: "Global Solutions", amount: "$12,400", status: "Draft" },
  { id: "INV-2025-0044", date: "2025-11-15", customer: "EuroTech GmbH", amount: "€8,900", status: "Paid" },
];

export default function SalesInvoiceWithTabs() {
  const [activeTab, setActiveTab] = useState("all");
  const [currency, setCurrency] = useState("INR");
  const [invoiceItems, setInvoiceItems] = useState<any[]>([]);

  const handleLedgerSelect = (ledger: any) => {
    console.log("Selected Customer:", ledger);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sales Invoices</h1>
          <p className="text-gray-600 mt-1">Create and manage professional GST invoices</p>
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
              <CardContent className="p-8 space-y-8">

                {/* Customer + Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-md mb-4">Select Customer</h3>
                    <LedgerAutoComplete ledgers={ledgers} onSelect={handleLedgerSelect} />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <p className="font-bold text-base">Valyron Labs Private Limited</p>
                    <p className="text-sm">123 Tech Park, Kozhikode<br />Kerala 673001, India</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>GSTIN:</strong> 32AAGCV1234A1Z5</div>
                      <div><strong>PAN:</strong> AAGCV1234A</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Invoice Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label>Invoice No.</Label>
                    <Input defaultValue="INV-2025-0048" className="font-bold" readOnly />
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input type="date" defaultValue={format(new Date(), "yyyy-MM-dd")} />
                  </div>
                  <div>
                    <Label>Due Date</Label>
                    <Input type="date" defaultValue={format(new Date(Date.now() + 30*24*60*60*1000), "yyyy-MM-dd")} />
                  </div>
                  <div>
                    <Label>Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Fixed: Using the correct working component */}
                <InvoiceItemsTable
                  items={invoiceItems}
                  onItemsChange={setInvoiceItems}
                  currency={currency}
                  showTaxColumns={currency === "INR"}
                />

                <div className="flex justify-end gap-3 pt-8">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>Send Invoice</Button>
                  <Button onClick={() => window.print()}>
                    <Download className="h-4 w-4 mr-2" />
                    Print / PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ========== ALL INVOICES LIST TAB ========== */}
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">All Invoices</CardTitle>
                <p className="text-gray-600">View and manage all your invoices</p>
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
                            <Badge
                              variant={
                                inv.status === "Paid" ? "default" :
                                inv.status === "Sent" ? "secondary" : "outline"
                              }
                            >
                              {inv.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-center gap-2">
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