import React from "react";

import {
  CoreH4,
  CoreAlert,
  CoreStack,
  CoreLinearProgress,
  CoreBox,
  CoreClasses
  // CoreLinearProgressWithLabel
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreLinearProgressDocs() {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [buffer, setBuffer] = React.useState(10);

  return (
    <>
      <CoreH4>CoreLinearProgress</CoreH4>

      <CodeSample
        title={"Linear indeterminate"}
        code={"<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]} ><CoreLinearProgress value={70} /></CoreBox>"}
        renderElement={<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]} >
            <CoreLinearProgress value={70} />
          </CoreBox>
        </CoreBox>}
      />

      <CodeSample
        title={"Linear Color"}
        code={`<CoreLinearProgress color="secondary" />
<CoreLinearProgress color="success" />
<CoreLinearProgress color="inherit" />`}
        renderElement={
          <CoreStack direction="column" spacing={2} styleClasses={[CoreClasses.WIDTH.W_100]}>
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
