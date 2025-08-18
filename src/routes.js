// import React from 'react';
// import Layout  from './views/Layout/Layout';
import Path2 from "./views/Layout/path2";
import Path3 from "./views/Layout/path3";
import Home from "./views/Layout/home";
import Model from "./views/Layout/model";
import PrivacyPolicy from "./views/Layout/privacy-policy";
import TermsAndConditions from "./views/Layout/terms-and-conditions";
// import Calculator from './views/Layout/calculator'
import Faqs from "./views/Layout/faqs";

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/invest", name: "path2", component: Path2 },
  { path: "/projects", name: "path3", component: Path3 },
  { path: "/thankyou", name: "model", component: Model },
  { path: "/privacy-policy", name: "privacy-policy", component: PrivacyPolicy },
  {
    path: "/terms-and-conditions",
    name: "privacy-policy",
    component: TermsAndConditions,
  },
  // { path: '/calculator', name: 'privacy-policy', component: Calculator },
  { path: "/faqs", name: "faqs", component: Faqs },
];

export default routes;
