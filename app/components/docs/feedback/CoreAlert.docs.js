import {
    CoreH4,
    CoreTypographyBody1,
    CoreDivider,
    CoreAlert,
    CoreStack,
    CoreClasses
  } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

  export default function CoreAlertDocs(){
    return (
        <>
        <CoreAlert severity="warning">CoreAlert in not implemented in mobile</CoreAlert>

        <CoreH4>CoreAlert</CoreH4>
        <CoreTypographyBody1>
            A CoreAlert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
        </CoreTypographyBody1>

        <CodeSample
        title={"Basic alerts"}
        description={"The CoreAlert offers four severity levels that set a distinctive icon and color"}
        code={`<CoreAlert severity="error">This is an error CoreAlert</CoreAlert>
<CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
<CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
<CoreAlert severity="success">This is an success CoreAlert</CoreAlert>`}
        renderElement={
      <CoreStack direction="column" spacing={2}>
            <CoreAlert severity="error" styleClasses={[CoreClasses.WIDTH.W_100]}>This is an error CoreAlert</CoreAlert>
            <CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
            <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
            <CoreAlert severity="success">This is an success CoreAlert</CoreAlert>
            </CoreStack>

        }
        />
        <CoreDivider/>
      <ComponentProps component={CoreAlert} />
        </>
    )
  }
