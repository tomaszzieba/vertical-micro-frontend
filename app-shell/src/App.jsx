import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { GlobalCountContext } from "./contexts";

const router = createRouter({ routeTree });

function App() {
  const globalCounterHook = useState(0);
  return (
    <GlobalCountContext.Provider value={globalCounterHook}>
      <div className="container">
        <Card></Card>
        <RouterProvider router={router} />
      </div>
    </GlobalCountContext.Provider>
  );
}

export default App;
