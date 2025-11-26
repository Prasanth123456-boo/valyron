import salesRoutes from "./Sales/SalesRoute";
import purchaseRoutes from "./Purchase/PurchaseRoute";
import dasheRoutes from "./DashBoardRoute/DashBoard";

const allRoutes = [
    ...salesRoutes,
    ...purchaseRoutes,
    ...dasheRoutes,
];

export default allRoutes;