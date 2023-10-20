import {
  CoreH4,
  CoreH6,
  CoreTypographyBody1,
  CoreAlert,
  CoreStack,
  CoreCircularProgress,
  CoreLinearProgress,
  // CoreCircularProgressWithLabel
  // CoreLinearProgressWithLabel
} from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";
import React from "react";
export default function CoreProgressDocs() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  return (
    <>
      <CoreH4>CoreProgress</CoreH4>
      <CoreStack direction="column" spacing={2}>
        <CoreTypographyBody1>
          CoreProgress indicators commonly known as spinners, express an unspecified
          wait time or display the length of a process.
        </CoreTypographyBody1>
        <CoreTypographyBody1>
          CoreProgress indicators inform users about the status of ongoing
          processes, such as loading an app, submitting a form, or saving
          updates. Determinate indicators display how long an operation will
          take. Indeterminate indicators visualize an unspecified wait time.
        </CoreTypographyBody1>
      </CoreStack>

      <CoreH6>CoreCircularProgress</CoreH6>
      <CodeSample
        title={"Circular indeterminate"}
        code={`<CoreCircularProgress />`}
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
        code={`<CoreCircularProgressWithLabel value={progress} />`}
      />

      <CoreH6>CoreLinearProgress</CoreH6>

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

      <ComponentProps component={CoreCircularProgress} />
      <ComponentProps component={CoreLinearProgress} />
    </>
  );
}
