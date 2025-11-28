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
    path: "/valyron/purchase-invoice",
    component: PurchaseInvoiceWithTabs,
  },
    {
    path: "/valyron/purchase-order",
    component: PurchaseOrderWithTabs,
  },
    {
    path: "/valyron/purchase-return",
    component: PurchaseReturnWithTabs,
  }
 
 
];

export default purchaseRoutes;
