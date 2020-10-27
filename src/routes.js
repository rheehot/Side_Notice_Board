import React from 'react';
import { Redirect } from "react-router-dom";

const NoticeList = React.lazy(() => import("./components/NoticeList"));
const Join = React.lazy(() => import("./components/auth/Join"));
const Login = React.lazy(() => import("./components/auth/Login"));

const routes = [
  {
    path: "/noticeList",
    exact: true,
    component: () => <Redirect to="/noticeList"/>
  },
  {
    path: "/noticeList",
    exact: true,
    component: NoticeList
  },
  {
    path: "/join",
    component: Join
  },
  {
    path: "/login",
    component: Login
  },
];

export default routes;
