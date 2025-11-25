import SalesInvoice from "@/modules/sales/SalesInvoice";
import SalesReturn from "@/modules/salesReturn/SalesReturn";
import SalesOrder from "@/modules/salesOrder/SalesOrder";
import SalesEstimate from "@/modules/salesEstimate/SalesEstimate";

import type { FC } from "react";

export interface AppRoute {
    path: string;
    component: FC;
}

const salesRoutes: AppRoute[] = [
  {
    path: "/sales-invoice",
    component: SalesInvoice,
  },
   {
    path: "/sales-return",
    component: SalesReturn,
  },
   {
    path: "/sales-order",
    component: SalesOrder,
  },
   {
    path: "/sales-estimate",
    component: SalesEstimate,
  },
];

export default salesRoutes;
