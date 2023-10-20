import {
  CoreH4,
  CoreAlert,
  CoreStack,
  CoreLinearProgress,
  // CoreLinearProgressWithLabel
} from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";
import React from "react";

export default function CoreLinearProgressDocs() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  return (
    <>
      <CoreH4>CoreLinearProgress</CoreH4>

      <CoreAlert severity="error">
        Linear Error: Linear progress bar is not showing
      </CoreAlert>
      <CodeSample
        title={"Linear indeterminate"}
        code={`<CoreLinearProgress />`}
        renderElement={<CoreLinearProgress />}
      />
      <CoreAlert severity="error">
        Linear Color Error: Linear progress bars are not showing
      </CoreAlert>
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
      <CoreAlert severity="error">
        Linear determinate Error: Linear determinate progress bar is not showing
      </CoreAlert>
      <CodeSample
        title={"Linear determinate"}
        code={`
<CoreLinearProgress variant="determinate" value={progress} />`}
        renderElement={
          <CoreLinearProgress variant="determinate" value={progress} />
        }
      />
      <CoreAlert severity="error">
        Linear buffer Error: Linear buffer progress bar is not showing
      </CoreAlert>
      <CodeSample
        title={"Linear buffer"}
        code={`<CoreLinearProgress variant="buffer" value={progress} valueBuffer={buffer} />`}
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
        code={`<CoreLinearProgressWithLabel value={progress} />`}
      />

      <ComponentProps component={CoreLinearProgress} />
    </>
  );
}
