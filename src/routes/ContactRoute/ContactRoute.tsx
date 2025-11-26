import CustomersWithTabs from "@/modules/Customer/CustomersWithTabs";
import SuppliersWithTabs from "@/modules/Supplier/SuppliersWithTabs";
import type { FC } from "react";

export interface AppRoute {
    path: string;
    component: FC;
}

const contactRoutes: AppRoute[] = [
    {
        path: "/customers",
        component: CustomersWithTabs,
    },
    {
        path: "/suppliers",
        component: SuppliersWithTabs,
    }

];

export default contactRoutes;
