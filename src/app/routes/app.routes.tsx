import { Navigate, RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import DashboardLayout from "@/components/layouts/dashboard-layout/dashboard-layout";
import DashboardPage from "../pages/dashboard/dashboard";
import MyTaskPage from "../pages/my-task/my-task";
import ProfilePage from "../pages/profile/profile";

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
      {
        path: Paths.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
];
