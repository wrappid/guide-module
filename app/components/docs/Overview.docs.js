import { CoreH4 } from "@wrappid/core";

import CodeImport from "../CodeImport";

export default function OverviewDocs() {
  return (
    <>
      <CoreH4>Overview Docs</CoreH4>

      <CodeImport name="SingleComponent" />

      <CodeImport name={["Component1", "Component2", "Component3"]} />
    </>
  );
}