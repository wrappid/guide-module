import React from "react";

import {
  CoreH4,
  CoreAlert,
  CoreStack,
  CoreLinearProgress
  // CoreLinearProgressWithLabel
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreLinearProgressDocs() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  return (
    <>
      <CoreH4>CoreLinearProgress</CoreH4>

      <CodeSample
        title={"Linear indeterminate"}
        code={"<CoreLinearProgress />"}
        renderElement={<CoreLinearProgress />}
      />

      <CodeSample
        title={"Linear Color"}
        code={`<CoreLinearProgress color="secondary" />
<CoreLinearProgress color="success" />
<CoreLinearProgress color="inherit" />`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreLinearProgress color="secondary" />

            <CoreLinearProgress color="success" />

            <CoreLinearProgress color="inherit" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Linear determinate"}
        code={`
<CoreLinearProgress variant="determinate" value={progress} />`}
        renderElement={
          <CoreLinearProgress variant="determinate" value={progress} />
        }
      />

      <CodeSample
        title={"Linear buffer"}
        code={"<CoreLinearProgress variant=\"buffer\" value={progress} valueBuffer={buffer} />"}
        renderElement={
          <CoreLinearProgress
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
        }
      />

      <CoreAlert severity="error">
        Linear with label Error: CoreLinearProgressWithLabel is not implemented
      </CoreAlert>

      <CodeSample
        title={"Linear with label(NOT IMPLEMENTED)"}
        code={"<CoreLinearProgressWithLabel value={progress} />"}
      />

      <ComponentProps component={CoreLinearProgress} />
    </>
  );
}
