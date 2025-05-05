import { createLazyFileRoute } from "@tanstack/react-router";
import React, { Suspense, useContext } from "react";
import { GlobalCountContext } from "../contexts";

const RemoteApp1 = React.lazy(() => import("remote_app_1/App"));

export const Route = createLazyFileRoute("/remote_1")({
  component: Remote1,
});

function Remote1() {
  const [globalCount, setGlobalCount] = useContext(GlobalCountContext);
  const incrementGlobalCount = () => setGlobalCount((count) => count + 1);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp1
          globalCount={globalCount}
          incrementGlobalCount={incrementGlobalCount}
        />
      </Suspense>
    </>
  );
}
