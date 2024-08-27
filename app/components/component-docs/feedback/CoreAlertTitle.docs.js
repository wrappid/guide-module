import { CoreAlert, CoreStack, CoreAlertTitle, CoreClasses } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAlertTitleDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreAlertTitle}
        description=" CoreAlertTitle designed to provide a clear and concise heading for the message or information presented within the alert."
        samples={
          <>
            <CodeSample
              title={"Basic CoreAlertTitle "}
              description={"CoreAlertTitle inherits typography properties from the CoreAlert component."}
              code={`<CoreAlert severity="primary">
  <CoreAlertTitle>Primary</CoreAlertTitle>
  This is a primary alert — check it out!
</CoreAlert>

<CoreAlert severity="secondary">
  <CoreAlertTitle>Secondary</CoreAlertTitle>
  This is a secondary alert — check it out!
</CoreAlert>

<CoreAlert severity="success">
  <CoreAlertTitle>Success</CoreAlertTitle>
  This is a success alert — check it out!
</CoreAlert>

<CoreAlert severity="info">
  <CoreAlertTitle>Info</CoreAlertTitle>
  This is an info alert — check it out!
</CoreAlert>

<CoreAlert severity="warning">
  <CoreAlertTitle>Warning</CoreAlertTitle>
  This is a warning alert — check it out!
</CoreAlert>

<CoreAlert severity="error">
  <CoreAlertTitle>Error</CoreAlertTitle>
  This is an error alert — check it out!
</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreStack, CoreAlertTitle, CoreClasses } from "@wrappid/core";

export default function BasicCoreAlertTitle () {
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>

      <CoreAlert severity="primary">
        <CoreAlertTitle>Primary</CoreAlertTitle>
          This is a primary alert — check it out!
      </CoreAlert>

      <CoreAlert severity="secondary">
        <CoreAlertTitle>Secondary</CoreAlertTitle>
          This is a secondary alert — check it out!
      </CoreAlert>

      <CoreAlert severity="success">
        <CoreAlertTitle>Success</CoreAlertTitle>
          This is a success alert — check it out!
      </CoreAlert>

      <CoreAlert severity="info">
        <CoreAlertTitle>Info</CoreAlertTitle>
            This is an info alert — check it out!
      </CoreAlert>

      <CoreAlert severity="warning">
        <CoreAlertTitle>Warning</CoreAlertTitle>
          This is a warning alert — check it out!
        </CoreAlert>

      <CoreAlert severity="error">
        <CoreAlertTitle>Error</CoreAlertTitle>
            This is an error alert — check it out!
      </CoreAlert>

    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>

                    <CoreAlert severity="primary">
                      <CoreAlertTitle>Primary</CoreAlertTitle>
                This is a primary alert — check it out!
                    </CoreAlert>

                    <CoreAlert severity="secondary">
                      <CoreAlertTitle>Secondary</CoreAlertTitle>
                This is a secondary alert — check it out!
                    </CoreAlert>

                    <CoreAlert severity="success">
                      <CoreAlertTitle>Success</CoreAlertTitle>
                This is a success alert — check it out!
                    </CoreAlert>

                    <CoreAlert severity="info">
                      <CoreAlertTitle>Info</CoreAlertTitle>
                This is an info alert — check it out!
                    </CoreAlert>

                    <CoreAlert severity="warning">
                      <CoreAlertTitle>Warning</CoreAlertTitle>
                This is a warning alert — check it out!
                    </CoreAlert>

                    <CoreAlert severity="error">
                      <CoreAlertTitle>Error</CoreAlertTitle>
                This is an error alert — check it out!
                    </CoreAlert>
            
                  </CoreStack>
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
