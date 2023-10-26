import React from "react";

import {
  CoreH4,
  CoreAlert,
  CoreStack,
  CoreCircularProgress
  // CoreCircularProgressWithLabel
} from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreCircularProgressDocs() {
  const [progress, setProgress] = React.useState(0);

  return (
    <>
      <CoreH4>CoreCircularProgress</CoreH4>

      <CodeSample
        title={"Circular indeterminate"}
        code={"<CoreCircularProgress />"}
        renderElement={<CoreCircularProgress />}
      />

      <CodeSample
        title={"Circular Color"}
        code={`<CoreCircularProgress color="secondary" />
<CoreCircularProgress color="success" />
<CoreCircularProgress color="inherit" />`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreCircularProgress color="secondary" />

            <CoreCircularProgress color="success" />

            <CoreCircularProgress color="inherit" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Circular determinate"}
        code={`<CoreCircularProgress variant="determinate" value={25} />
<CoreCircularProgress variant="determinate" value={50} />
<CoreCircularProgress variant="determinate" value={75} />
<CoreCircularProgress variant="determinate" value={100} />
<CoreCircularProgress variant="determinate" value={progress} />`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreCircularProgress variant="determinate" value={25} />

            <CoreCircularProgress variant="determinate" value={50} />

            <CoreCircularProgress variant="determinate" value={75} />

            <CoreCircularProgress variant="determinate" value={100} />

            <CoreCircularProgress variant="determinate" value={progress} />
          </CoreStack>
        }
      />

      <CoreAlert severity="warning">
        Interactive integration Info: TODO
      </CoreAlert>

      {/**@todo Interactive integration*/}
      <CodeSample title={"Interactive integration(TODO)"} />

      <CoreAlert severity="error">
        Circular with label Error: CoreCircularProgressWithLabel is Not
        Implemented
      </CoreAlert>

      <CodeSample
        title={"Circular with label(NOT IMPLEMENTED)"}
        code={"<CoreCircularProgressWithLabel value={progress} />"}
      />

      <ComponentProps component={CoreCircularProgress} />
    </>
  );
}
