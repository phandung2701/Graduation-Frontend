import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import UserManagement from "views/admin/UserManagement";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import AllTransaction from "views/manageJob/Transaction";

export default function Admin() {
  console.log("kìn chái na");
  return (
    <>
      <Sidebar />
      <div
        className="relative md:ml-64 bg-blueGray-100"
        style={{ height: "100vh" }}
      >
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route
              path="/admin/userManagement"
              exact
              component={UserManagement}
            />
            <Route path="/admin/settings" exact component={Settings} />
            <Route
              path="/admin/transactions"
              exact
              component={AllTransaction}
            />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
