import ReportsDashboard from "@/modules/Report/Report";
import type { FC } from "react";

export interface AppRoute {
    path: string;
    component: FC;
}

const reportRoutes: AppRoute[] = [
    {
        path: "/reports",
        component: ReportsDashboard,
    },
   
];

export default reportRoutes;
