import { createLazyFileRoute } from "@tanstack/react-router";
import React, { Suspense, useContext } from "react";
import { GlobalCountContext } from "../contexts";

const RemoteApp2 = React.lazy(() => import("remote_app_2/App"));

export const Route = createLazyFileRoute("/remote_2")({
  component: Remote2,
});

function Remote2() {
  const [globalCount, setGlobalCount] = useContext(GlobalCountContext);
  const incrementGlobalCount = () => setGlobalCount((count) => count + 1);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp2
          globalCount={globalCount}
          incrementGlobalCount={incrementGlobalCount}
        />
      </Suspense>
    </>
  );
}
