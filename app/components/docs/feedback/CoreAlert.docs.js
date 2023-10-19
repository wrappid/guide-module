import {
    CoreH4,
    CoreTypographyBody1,
    CoreDivider,
    CoreAlert,
    CoreStack,
    CoreClasses,
    // CoreAlertTitle
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

        <CodeSample 
        title={"Description (NOT IMPLEMENTED)"}
        description={"You can use the AlertTitle component to display a formatted title above the content."}
        code={`<CoreAlert severity="error">
<CoreAlertTitle>Error</CoreAlertTitle>
This is an error alert.
</CoreAlert>
<CoreAlert severity="warning">
<CoreAlertTitle>Warning</CoreAlertTitle>
This is a warning alert.
</CoreAlert>
<CoreAlert severity="info">
<CoreAlertTitle>Info</CoreAlertTitle>
This is an info alert.
</CoreAlert>
<CoreAlert severity="success">
<CoreAlertTitle>Success</CoreAlertTitle>
This is a success alert.
</CoreAlert>`}
        />
        <CoreDivider/>
        <CodeSample 
        title={"Actions"}
        description={"An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert. \
        If an onClose callback is provided and no action prop is set, a close icon is displayed. The action prop can be used to provide an alternative action, for example using a Button or IconButton."}
        code={""}
        renderElement={
          <>
          <CoreAlert onClose={() => { } }>This is a success alert — check it out!</CoreAlert><CoreAlert
            action={<Button color="inherit" size="small">
              UNDO
            </Button>}
          >
            This is a success alert — check it out!
          </CoreAlert></>
        }
        />
      <ComponentProps component={CoreAlert} />
        </>
    )
  }
