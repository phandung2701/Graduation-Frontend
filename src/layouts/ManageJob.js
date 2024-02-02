import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Maps from "views/admin/Maps.js";
import JobsApply from "views/manageJob/JobsApply";
import Tables from "views/admin/Tables.js";
import SidebarManageJob from "components/Sidebar/SidebarManageJob";
import MyJobs from "views/manageJob/MyJobs";
import UserDropdown from "components/Dropdowns/UserDropdown";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
import { Link } from "@chakra-ui/react";
import Transaction from "views/manageJob/Transaction";
import NotificationHistory from "views/manageJob/NotificationHistory";

export default function ManageJob() {
  return (
    <>
      <SidebarManageJob />
      <div
        className="relative md:ml-64 bg-blueGray-100  "
        style={{ height: "100vh" }}
      >
        <div
          className="relative  md:pt-12 pb-20 pt-12 bg-blueGray-100"
          style={{ marginBottom: "40px" }}
        >
          <nav className="w-full">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <Link
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    to="/chat"
                  >
                    <i className="text-blueGray-400 fab fa-facebook-messenger text-lg leading-lg " />
                    <span className="inline-block ml-2">Chat</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <NotificationDropdown />
                </li>
                <li className="flex items-center mx-3 px-3">
                  <UserDropdown />
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className=" px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/manage/transaction" exact component={Transaction} />
            <Route path="/manage/myJobs" exact component={MyJobs} />
            <Route
              path="/manage/notification"
              exact
              component={NotificationHistory}
            />

            <Route path="/manage/jobsApply" exact component={JobsApply} />
            <Redirect from="/manage" to="/manage/myJobs" />
          </Switch>
        </div>
      </div>
    </>
  );
}
