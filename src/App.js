import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import ListJob from "views/Jobs/ListJob";
import ManageJob from "layouts/ManageJob";
import NotFound from "views/NotFound.jsx";
import ChatLayout from "pages/ChatLayout";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            {/* add routes with layouts */}
            <Route path="/jobs" component={ListJob} />
            <Route path="/admin" component={Admin} />
            <Route path="/manage" component={ManageJob} />

            <Route path="/auth" component={Auth} />
            {/* add routes without layouts */}
            <Route path="/landing" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/chats" exact component={ChatLayout} />

            <Route path="/" exact component={Index} />
            <Route path="/notfound" exact component={NotFound} />

            {/* add redirect for first page */}
            <Redirect from="*" to="/notfound" />
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default App;
