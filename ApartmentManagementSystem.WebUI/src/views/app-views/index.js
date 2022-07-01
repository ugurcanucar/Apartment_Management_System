import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ApartmentManagement from "./Apartment";

const Dashboard = React.lazy(() => import("./Dashboard"));

const routes = [
  {
    key: 1,
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    key: 2,
    path: "/apartment-management",
    element: <ApartmentManagement />,
  },
];
export const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.element} />
        ))}
        <Route path={`*`} element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
