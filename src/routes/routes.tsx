import { type RouteObject } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { routes as dasRoutes } from "../components/routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [...dasRoutes],
  },
];
