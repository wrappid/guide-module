import { CoreAlert, CoreH4, CoreStack, CoreAlertTitle } from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreAlertTitleDocs() {
  return (
    <>
      <CoreH4>CoreAlertTitle</CoreH4>

      <CodeSample
        title={"Basic CoreAlertTitle "}
        description={
          "You can use the AlertTitle component to display a formatted title above the content."
        }
        code={`
<CoreStack direction="column" spacing={2}>
  <CoreAlert severity="error">
    <CoreAlertTitle>Error</CoreAlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </CoreAlert>

  <CoreAlert severity="warning">
    <CoreAlertTitle>Warning</CoreAlertTitle>
    This is a warning alert — <strong>check it out!</strong>
  </CoreAlert>

  <CoreAlert severity="info">
    <CoreAlertTitle>Info</CoreAlertTitle>
    This is an info alert — <strong>check it out!</strong>
  </CoreAlert>

  <CoreAlert severity="success">
    <CoreAlertTitle>Success</CoreAlertTitle>
    This is a success alert — <strong>check it out!</strong>
  </CoreAlert>
</CoreStack>        
        
        `}
        renderElement={
          <>
            <CoreStack direction="column" spacing={2}>
              <CoreAlert severity="error">
                <CoreAlertTitle>Error</CoreAlertTitle>
                This is an error alert — <strong>check it out!</strong>
              </CoreAlert>

              <CoreAlert severity="warning">
                <CoreAlertTitle>Warning</CoreAlertTitle>
                This is a warning alert — <strong>check it out!</strong>
              </CoreAlert>

              <CoreAlert severity="info">
                <CoreAlertTitle>Info</CoreAlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </CoreAlert>

              <CoreAlert severity="success">
                <CoreAlertTitle>Success</CoreAlertTitle>
                This is a success alert — <strong>check it out!</strong>
              </CoreAlert>
            </CoreStack>
          </>
        }
      />
    </>
  );
}
