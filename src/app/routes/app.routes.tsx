import { Navigate, RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import DashboardLayout from "@/components/layouts/dashboard-layout";
import MyTaskPage from "../pages/my-task/my-task";
import DashboardPage from "../pages/dashboard/dashboard";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <DashboardLayout />,
    children: [
      {
        path: Paths.HOME,
        element: <Navigate to={Paths.DASHBOARD} />,
      },
      {
        path: Paths.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: Paths.MY_TASK,
        element: <MyTaskPage />,
      },
    ],
  },
];
