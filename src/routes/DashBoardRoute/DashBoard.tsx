import ERPClassyDashboard from "@/modules/dashBoard/DashBoard";

import type { FC } from "react";

export interface AppRoute {
    path: string;
    component: FC;
}

const dasheRoutes: AppRoute[] = [
  {
    path: "/valyron/",
    component: ERPClassyDashboard,
  }
 
];

export default dasheRoutes;
