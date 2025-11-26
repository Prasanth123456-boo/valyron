import PurchaseInvoiceWithTabs from "@/modules/purchse/PurchaseInvoice";
import PurchaseOrderWithTabs from "@/modules/purchaseOrder/PurchaseOrder";
import PurchaseReturnWithTabs from "@/modules/purchaseReturn/PurchaseReturn";

import type { FC } from "react";

export interface AppRoute {
    path: string;
    component: FC;
}

const purchaseRoutes: AppRoute[] = [
  {
    path: "/purchase-invoice",
    component: PurchaseInvoiceWithTabs,
  },
    {
    path: "/purchase-order",
    component: PurchaseOrderWithTabs,
  },
    {
    path: "/purchase-return",
    component: PurchaseReturnWithTabs,
  }
 
 
];

export default purchaseRoutes;
