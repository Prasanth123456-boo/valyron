import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { format, addDays } from "date-fns";

export default function InternationalSalesEstimate() {
  const today = format(new Date(), "yyyy-MM-dd");
  const validUntil = format(addDays(new Date(), 30), "yyyy-MM-dd");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-8 px-4">
      <div className="mx-auto">
        <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden print:shadow-none print:border print:border-gray-300">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white print:bg-white print:text-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <FileText className="w-12 h-12" />
                <div>
                  <h1 className="text-5xl font-bold tracking-tight">QUOTATION</h1>
                  <p className="text-emerald-100 print:text-gray-600 text-lg mt-1">
                    Professional Estimate • Valid for 30 Days
                  </p>
                </div>
              </div>
              <Badge className="text-xl px-8 py-3 bg-white/20 text-white print:bg-emerald-100 print:text-emerald-800">
                QUO-2025-1124
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-8 print:p-6 space-y-9">
            {/* Company & Client */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* From */}
              <div className="space-y-5">
                <h3 className="font-bold text-xl text-gray-800 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  From
                </h3>
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-100">
                  <p className="text-2xl font-bold text-emerald-800">Valyron Labs Private Limited</p>
                  <p className="text-gray-700 mt-2">
                    123 Tech Park, Kozhikode<br />
                    Kerala 673001, India
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div><strong>GSTIN:</strong> 32AAGCV1234A1Z5</div>
                    <div><strong>PAN:</strong> AAGCV1234A</div>
                  </div>
                  <div className="mt-3 space-y-1 text-sm">
                    <p><strong>Email:</strong> quotes@valyronlabs.com</p>
                    <p><strong>Phone:</strong> +91 996 123 4567</p>
                    <p><strong>Website:</strong> valyronlabs.com</p>
                  </div>
                </div>
              </div>

              {/* Bill To */}
              <div className="space-y-5">
                <h3 className="font-bold text-xl text-gray-800">Bill To</h3>
                <div className="space-y-4">
                  <Input defaultValue="Acme Corporation Inc." className="text-lg font-semibold" />
                  <Textarea
                    defaultValue="123 Broadway Street\nNew York, NY 10001\nUnited States of America"
                    rows={3}
                    className="resize-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Client Contact</Label>
                      <Input defaultValue="Mr. John Smith" />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input type="email" defaultValue="john@acme.com" />
                    </div>
                  </div>
                  <div>
                    <Label>Tax ID / VAT No.</Label>
                    <Input defaultValue="US123456789" />
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-emerald-200" />

            {/* Quote Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <Label className="text-gray-600 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Quote Number
                </Label>
                <Input defaultValue="QUO-2025-1124" className="font-bold text-xl mt-1 bg-emerald-50" readOnly />
              </div>
              <div>
                <Label className="text-gray-600 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Quote Date
                </Label>
                <Input type="date" defaultValue={today} className="mt-1" />
              </div>
              <div>
                <Label className="text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Valid Until
                </Label>
                <Input type="date" defaultValue={validUntil} className="mt-1 font-semibold text-emerald-700" />
              </div>
              <div>
                <Label className="text-gray-600">Currency</Label>
                <Select defaultValue="USD">
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="GBP">GBP - British Pound</SelectItem>
                    <SelectItem value="INR">INR - Indian Rupee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Title */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-6 text-center">
              <h2 className="text-3xl font-bold">Enterprise CRM & Analytics Platform</h2>
              <p className="mt-2 opacity-90">Custom web application with real-time reporting and mobile access</p>
            </div>

            {/* Line Items */}
            <div>
              <Table>
                <TableHeader>
                  <TableRow className="bg-emerald-50">
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center">Qty</TableHead>
                    <TableHead className="text-center">Unit</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead className="text-right">Tax</TableHead>
                    <TableHead className="text-right font-bold">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-emerald-50/30 transition">
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>
                      <div className="font-semibold">Frontend Development</div>
                      <p className="text-sm text-gray-600">React + TypeScript + Tailwind CSS Dashboard</p>
                    </TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center">Project</TableCell>
                    <TableCell className="text-right">$18,000.00</TableCell>
                    <TableCell className="text-right text-gray-500">18%</TableCell>
                    <TableCell className="text-right font-bold">$21,240.00</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-emerald-50/30 transition">
                    <TableCell className="font-medium">2</TableCell>
                    <TableCell>
                      <div className="font-semibold">Backend & API</div>
                      <p className="text-sm text-gray-600">Node.js + Express + PostgreSQL + Redis</p>
                    </TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center">Project</TableCell>
                    <TableCell className="text-right">$15,000.00</TableCell>
                    <TableCell className="text-right text-gray-500">18%</TableCell>
                    <TableCell className="text-right font-bold">$17,700.00</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-emerald-50/30 transition">
                    <TableCell className="font-medium">3</TableCell>
                    <TableCell>
                      <div className="font-semibold">Mobile App (iOS & Android)</div>
                      <p className="text-sm text-gray-600">React Native with offline sync</p>
                    </TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center">Project</TableCell>
                    <TableCell className="text-right">$12,000.00</TableCell>
                    <TableCell className="text-right text-gray-500">18%</TableCell>
                    <TableCell className="text-right font-bold">$14,160.00</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-emerald-50/30 transition">
                    <TableCell className="font-medium">4</TableCell>
                    <TableCell>
                      <div className="font-semibold">3 Months Post-Launch Support</div>
                    </TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center">Package</TableCell>
                    <TableCell className="text-right">$3,000.00</TableCell>
                    <TableCell className="text-right text-gray-500">18%</TableCell>
                    <TableCell className="text-right font-bold">$3,540.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Total Summary */}
            <div className="ml-auto max-w-lg">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-8 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-bold">$48,000.00</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Tax (18% GST / VAT)</span>
                  <span className="font-bold">$8,640.00</span>
                </div>
                <Separator className="bg-white/30" />
                <div className="flex justify-between text-3xl font-bold">
                  <span>Total Amount</span>
                  <span>$56,640.00</span>
                </div>
                <div className="text-center pt-4 border-t border-white/30 text-lg">
                  <p>Fifty Six Thousand Six Hundred Forty US Dollars Only</p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-xl text-amber-900 mb-4">Payment Terms</h3>
              <ul className="space-y-2 text-amber-800">
                <li>30% Advance Payment upon acceptance of quotation</li>
                <li>40% on completion of UI/UX and backend API</li>
                <li>30% on final delivery and client approval</li>
                <li>Payment via Bank Transfer / Wise / PayPal</li>
                <li>Timeline: 12 weeks from project kickoff</li>
              </ul>
            </div>

            {/* Notes */}
            <div>
              <Label className="text-lg font-semibold">Additional Notes</Label>
              <Textarea
                defaultValue="• Includes unlimited revisions during design phase\n• Source code ownership transferred upon final payment\n• Free hosting setup on AWS / Vercel\n• 1-year warranty on all code\nThank you for considering Valyron Labs!"
                className="mt-3 text-gray-700"
                rows={6}
              />
            </div>

            {/* Acceptance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <div className="text-center">
                <p className="text-lg font-semibold mb-10">Client Acceptance</p>
                <div className="border-t-4 border-emerald-600 w-80 mx-auto pt-4">
                  <p className="font-bold text-xl">Authorized Signatory</p>
                  <p className="text-gray-600">Acme Corporation Inc.</p>
                </div>
                <p className="mt-4 text-sm text-gray-500">Date: ________________</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold mb-10">Prepared & Approved By</p>
                <div className="border-t-4 border-teal-600 w-80 mx-auto pt-4">
                  <p className="font-bold text-xl text-teal-700">Valyron Labs Pvt Ltd</p>
                </div>
                <p className="mt-8 text-sm italic text-gray-600">
                  This is a computer-generated quotation. No signature required.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-16 print:hidden">
              <Button size="lg" variant="outline" onClick={() => window.print()}>
                Print Quote
              </Button>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Download PDF
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Accept Quotation Online
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-500 mt-10 print:hidden">
          International Standard Quotation • GST/VAT Ready • Export of Services Compliant • Trusted Worldwide
        </p>
      </div>
    </div>
  );
}