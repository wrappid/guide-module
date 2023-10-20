import {
    CoreH4,
    CoreTypographyBody1,
    CoreDivider,
    CoreStack,
    // CoreProgress
  } from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreCircularProgressDocs(){
    return (
        <>
        <CoreH4>Progress</CoreH4>
      <CoreStack direction="column" spacing={2}>
        <CoreTypographyBody1>
        Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
        </CoreTypographyBody1>
        <CoreTypographyBody1>
        Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
        Determinate indicators display how long an operation will take.
        Indeterminate indicators visualize an unspecified wait time.

        </CoreTypographyBody1>
        </CoreStack>

        <CodeSample
        title={"Circular"}
        />
        <CodeSample
        title={"Circular Color"}
        /> 
        <CodeSample
        title={"Circular determinate"}
        /> 
        <CodeSample
        title={"Interactive integration"}
        /> 
        <CodeSample
        title={"Circular with label"}
        /> 
      {/* <ComponentProps component={CoreProgress} /> */}
        </>
    )
  }