import React, { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Weather from "./Components/Weather";
import Context from "./Context/context";
function App() {
  // state for show/hide danger alert
  let [showDangerAlert, setShowDangerAlert] = useState(false);
  // state for show/hide warning alert
  let [showWarningAlert, setShowWarningAlert] = useState(false);
  return (
    <Context.Provider
      value={{
        showDangerAlert,
        showWarningAlert,
        setShowDangerAlert,
        setShowWarningAlert,
      }}
    >
      <Fragment>
        <Search />
        <Weather />
      </Fragment>
    </Context.Provider>
  );
}

export default App;
