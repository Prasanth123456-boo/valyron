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
    path: "/valyron/sales-invoice",
    component: SalesInvoice,
  },
   {
    path: "/valyron/sales-return",
    component: SalesReturn,
  },
   {
    path: "/valyron/sales-order",
    component: SalesOrder,
  },
   {
    path: "/valyron/sales-estimate",
    component: SalesEstimate,
  },
];

export default salesRoutes;
