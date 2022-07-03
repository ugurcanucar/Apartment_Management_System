import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Admin routes
const Dashboard = React.lazy(() => import("./AdminViews/Dashboard"));
const Apartment = React.lazy(() => import("./AdminViews/Apartment"));
const User = React.lazy(() => import("./AdminViews/User"));
const Bill = React.lazy(() => import("./AdminViews/Bill"));
const Message = React.lazy(() => import("./AdminViews/Message"));
const ApartmentType = React.lazy(() => import("./AdminViews/ApartmentTypes"));
const BillType = React.lazy(() => import("./AdminViews/BillTypes"));
const Block = React.lazy(() => import("./AdminViews/Block"));

//User Routes
const UserBill = React.lazy(() => import("./UserViews/Bill"));
const UserMessage = React.lazy(() => import("./UserViews/Message"));

const routes = [
  {
    key: 1,
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    key: 2,
    path: "/apartment-management",
    element: <Apartment />,
  },
  {
    key: 3,
    path: "/user-management",
    element: <User />,
  },
  {
    key: 4,
    path: "/bill-management",
    element: <Bill />,
  },
  {
    key: 5,
    path: "/message-management",
    element: <Message />,
  },
  {
    key: 6,
    path: "/apartment-type-management",
    element: <ApartmentType />,
  },
  {
    key: 7,
    path: "/bill-type-management",
    element: <BillType />,
  },
  {
    key: 8,
    path: "/block-management",
    element: <Block />,
  },
];

const userRoutes = [
  {
    key: 1,
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    key: 1,
    path: "/bill-management",
    element: <UserBill />,
  },
  {
    key: 1,
    path: "/message-management",
    element: <UserMessage />,
  },
];
export const AppViews = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInformation"));
    setUser(user);
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {user.accountTypeId === 1
          ? routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))
          : userRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
        <Route path={`*`} element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
