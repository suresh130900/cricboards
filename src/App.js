import React, { Component } from 'react';
import Signup from "./pages/Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import PowerBi from "./pages/PowerBi";
import Sec_dash from "./pages/Sec_dash";
import AllMatches from "./pages/AllMatches";
import Man_of_match from "./pages/Man_of_match";

class App extends Component {
  render() {
      return (
          <div className="app">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Login />}>
                      </Route> <Route path="/signup" element={<Signup />}>
                      </Route>
                      <Route path="/powerbi" element={<PowerBi />}>
                      </Route>
                      <Route path="/Sec_dash" element={<Sec_dash />}>
                      </Route>
                      <Route path="/AllMatches" element={<AllMatches />}>
                      </Route>
                      <Route path="/Man_of_match" element={<Man_of_match />}>
                      </Route>
                  </Routes>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;
