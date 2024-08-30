import React from "react";

import {
  CoreTypographyBody1,
  CoreAlert,
  CoreStack,
  CoreClasses,
  CoreIcon,
  CoreButton,
  CoreH5,
  CoreCollapse,
  CoreIconButton,
  CoreBox
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAlertDocs() {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <ComponentDocs
        component={CoreAlert}
        description={
          <CoreTypographyBody1>
            CoreAlert display brief messages for the user without interrupting their use of the app.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"Default alerts"}
              description={<>
                <CoreTypographyBody1>
                  This is example of basic CoreAlerts.
                </CoreTypographyBody1>
              </>}
              expandedCode={`import { CoreAlert } from "@wrappid/core";

export default function DefaultAlert(){
  return (
   <CoreAlert>Alert with default value.</CoreAlert>
  );
}`}
              code={"<CoreAlert>Alert with default value.</CoreAlert>"}
              renderElement={
                <>
                  <CoreAlert>Alert with default value.</CoreAlert>
                </>
              }
            />

            <CodeSample
              title={"Basic alerts"}
              description={<>
                <CoreTypographyBody1>
                  This is example of basic CoreAlerts.
                </CoreTypographyBody1>
              </>}
              expandedCode={`import { CoreAlert, CoreIcon } from "@wrappid/core";

export default function BasicAlert(){
  return (
 <CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
    Here is a gentle confirmation that your action was successful.
  </CoreAlert>
  );
}`}
              code={` <CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
    Here is a gentle confirmation that your action was successful.
</CoreAlert>`}
              renderElement={
                <CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
                   Here is a gentle confirmation that your action was successful.
                </CoreAlert>
              }
            />

            <CodeSample
              title={"Severity"}
              description={
                <>
          The <CodeBlock>severity</CodeBlock> prop accepts four values representing different 

          states—<CodeBlock>success</CodeBlock> (the default),

                  {" "}<CodeBlock>primary</CodeBlock>,

                  {" "}<CodeBlock>secondary</CodeBlock>,

                  {" "}<CodeBlock>info</CodeBlock>,

                  {" "}<CodeBlock>warning</CodeBlock>, and 

                  {" "}<CodeBlock>error</CodeBlock>–with corresponding icon and color combinations for each:
                </>
              }
              expandedCode={`import { CoreAlert, CoreClasses, CoreStack } from "@wrappid/core";

export default function AlertSeverity(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
      <CoreAlert severity="primary">This is an success CoreAlert</CoreAlert>
      <CoreAlert severity="secondary">This is an success CoreAlert</CoreAlert>
      <CoreAlert severity="success">This is an success CoreAlert</CoreAlert>
      <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
      <CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
      <CoreAlert severity="error">This is an error CoreAlert</CoreAlert>
    </CoreStack>
  );
}`}
              code={`<CoreAlert severity="primary">This is an success CoreAlert</CoreAlert>
<CoreAlert severity="secondary">This is an success CoreAlert</CoreAlert>
<CoreAlert severity="success">This is an success CoreAlert</CoreAlert>
<CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
<CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
<CoreAlert severity="error">This is an error CoreAlert</CoreAlert>`}
              renderElement={
                <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
                  <CoreAlert severity="primary">This is an success CoreAlert</CoreAlert>

                  <CoreAlert severity="secondary">This is an success CoreAlert</CoreAlert>

                  <CoreAlert severity="success">This is an success CoreAlert</CoreAlert>

                  <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
                 
                  <CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>

                  <CoreAlert severity="error">This is an error CoreAlert</CoreAlert>

                </CoreStack>
              }
            />

            <CodeSample
              title={"Variants"}
              description={
                <>
                  <CoreTypographyBody1>
         The CoreAlert component comes with two alternative style options—<CodeBlock>filled</CodeBlock> and

                    {" "}<CodeBlock>outlined</CodeBlock>—which you can set using the 

                    {" "}<CodeBlock>variant</CodeBlock> prop.
                  </CoreTypographyBody1>

                  <CoreH5>Filled</CoreH5>
                </>
              }
              code={`<CoreAlert variant="filled" severity="primary">This is a filled success Alert.</CoreAlert>
<CoreAlert variant="filled" severity="secondary">This is a filled success Alert.</CoreAlert>
<CoreAlert variant="filled" severity="success">This is a filled success Alert.</CoreAlert>
<CoreAlert variant="filled" severity="info">This is a filled info Alert.</CoreAlert>
<CoreAlert variant="filled" severity="warning">This is a filled warning Alert.</CoreAlert>
<CoreAlert variant="filled" severity="error">This is a filled error Alert.</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreClasses, CoreStack } from "@wrappid/core";

export default function FilledAlerts(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
      CoreAlert variant="filled" severity="primary">This is a filled success Alert.</CoreAlert>
      <CoreAlert variant="filled" severity="secondary">This is a filled success Alert.</CoreAlert>
      <CoreAlert variant="filled" severity="success">This is a filled success Alert.</CoreAlert>
      <CoreAlert variant="filled" severity="info">This is a filled info Alert.</CoreAlert>
      <CoreAlert variant="filled" severity="warning">This is a filled warning Alert.</CoreAlert>
      <CoreAlert variant="filled" severity="error">This is a filled error Alert.</CoreAlert>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
                  <CoreAlert variant="filled" severity="primary">This is a filled success Alert.</CoreAlert>

                  <CoreAlert variant="filled" severity="secondary">This is a filled success Alert.</CoreAlert>

                  <CoreAlert variant="filled" severity="success">This is a filled success Alert.</CoreAlert>

                  <CoreAlert variant="filled" severity="info">This is a filled info Alert.</CoreAlert>

                  <CoreAlert variant="filled" severity="warning">This is a filled warning Alert.</CoreAlert>

                  <CoreAlert variant="filled" severity="error">This is a filled error Alert.</CoreAlert>
                </CoreStack>
              }
            />

            <CodeSample
              title={"outlined"}
              description={" "}
              code={`<CoreAlert variant="outlined" severity="primary">This is a outlined success Alert.</CoreAlert>
<CoreAlert variant="outlined" severity="secondary">This is a outlined success Alert.</CoreAlert>
<CoreAlert variant="outlined" severity="success">This is a outlined success Alert.</CoreAlert>
<CoreAlert variant="outlined" severity="info">This is a outlined info Alert.</CoreAlert>
<CoreAlert variant="outlined" severity="warning">This is a outlined warning Alert.</CoreAlert>
<CoreAlert variant="outlined" severity="error">This is a outlined error Alert.</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreClasses, CoreStack } from "@wrappid/core";

export default function OutlinedAlerts(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
      <CoreAlert variant="outlined" severity="primary">This is a outlined success Alert.</CoreAlert>
      <CoreAlert variant="outlined" severity="secondary">This is a outlined success Alert.</CoreAlert>
      <CoreAlert variant="outlined" severity="success">This is a outlined success Alert.</CoreAlert>
      <CoreAlert variant="outlined" severity="info">This is a outlined info Alert.</CoreAlert>
      <CoreAlert variant="outlined" severity="warning">This is a outlined warning Alert.</CoreAlert>
      <CoreAlert variant="outlined" severity="error">This is a outlined error Alert.</CoreAlert>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
                  <CoreAlert variant="outlined" severity="primary">This is a outlined success Alert.</CoreAlert>

                  <CoreAlert variant="outlined" severity="secondary">This is a outlined success Alert.</CoreAlert>

                  <CoreAlert variant="outlined" severity="success">This is a outlined success Alert.</CoreAlert>

                  <CoreAlert variant="outlined" severity="info">This is a outlined info Alert.</CoreAlert>

                  <CoreAlert variant="outlined" severity="warning">This is a outlined warning Alert.</CoreAlert>

                  <CoreAlert variant="outlined" severity="error">This is a outlined error Alert.</CoreAlert>
                </CoreStack>
              }
            />

            <CodeSample
              title={"Color"}
              description={
                <>
                  <CoreTypographyBody1>
              The color prop will override the default color for the specified
              severity.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreAlert severity="info" color="primary">This is a info CoreAlert with primary color.</CoreAlert>
<CoreAlert severity="info" color="secondary">This is a info CoreAlert with secondary color.</CoreAlert>
<CoreAlert severity="info" color="success">This is a info CoreAlert with success color.</CoreAlert>
<CoreAlert severity="success" color="info">This is a success CoreAlert with info color.</CoreAlert>
<CoreAlert severity="warning" color="warning">This is a warning CoreAlert with warning color.</CoreAlert>
<CoreAlert severity="error" color="error">This is a error CoreAlert with error color.</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreStack } from "@wrappid/core";

export default function ColorAlerts(){
  return (
    <CoreAlert severity="info" color="primary">This is a info CoreAlert with primary color.</CoreAlert>
    <CoreAlert severity="info" color="secondary">This is a info CoreAlert with secondary color.</CoreAlert>
    <CoreAlert severity="info" color="success">This is a info CoreAlert with success color.</CoreAlert>
    <CoreAlert severity="success" color="info">This is a success CoreAlert with info color.</CoreAlert>
    <CoreAlert severity="warning" color="warning">This is a warning CoreAlert with warning color.</CoreAlert>
    <CoreAlert severity="error" color="error">This is a error CoreAlert with error color.</CoreAlert>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack direction="column" spacing={2}>
                  <CoreAlert severity="info" color="primary">This is a info CoreAlert with primary color.</CoreAlert>

                  <CoreAlert severity="info" color="secondary">This is a info CoreAlert with secondary color.</CoreAlert>

                  <CoreAlert severity="info" color="success">This is a info CoreAlert with success color.</CoreAlert>

                  <CoreAlert severity="success" color="info">This is a success CoreAlert with info color.</CoreAlert>

                  <CoreAlert severity="warning" color="warning">This is a warning CoreAlert with warning color.</CoreAlert>

                  <CoreAlert severity="error" color="error">This is a error CoreAlert with error color.</CoreAlert>
              
                </CoreStack>
              }
            />

            <CodeSample
              title={"Actions"}
              description={
                <>
                  <CoreTypographyBody1>
          An CoreAlert can have an <CodeBlock>action</CodeBlock> prop, such as a close or undo button. It is rendered after the message, at the end of the alert.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
          If an <CodeBlock>onClose</CodeBlock> callback is provided and no action prop is set, a close icon is displayed. The action prop can be used to provide an alternative action, for example using a Button or CoreIconButton.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreAlert severity="warning" onClose={() => {}}>
  This Alert displays the default close icon.
</CoreAlert>

<CoreAlert
  severity="success"
  action={<CoreButton color="inherit" size="small" label="UNDO"/>}  
>
This Alert uses a Button component for its action.
</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreButton, CoreClasses, CoreStack } from "@wrappid/core";

export default function ActionAlerts(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
      <CoreAlert severity="warning" onClose={() => {}}>
        This Alert displays the default close icon.
      </CoreAlert>

      <CoreAlert
        severity="success"
        action={<CoreButton color="inherit" size="small" label="UNDO"/>}
      >
        This Alert uses a Button component for its action.
      </CoreAlert>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
                  <CoreAlert severity="warning" onClose={() => {}}>
        This Alert displays the default close icon.
                  </CoreAlert>

                  <CoreAlert
                    severity="success"
                    action={<CoreButton color="inherit" size="small" label="UNDO"/>}
                  >
        This Alert uses a Button component for its action.
                  </CoreAlert>
                </CoreStack>
              }
            />

            <CodeSample
              title={"Icons"}
              description={
                <>
                  <CoreTypographyBody1>
              The <CodeBlock>icon</CodeBlock> prop allows you to add an  to the beginning of the
              alert component. This will override the default icon for the
              specified severity.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              You can change the default severity to icon mapping with the 
                    <CodeBlock>iconMapping</CodeBlock> prop. This can be defined globally using theme
              customization.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              Setting the icon prop to <CodeBlock>false</CodeBlock> will remove the icon altogether.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
  This success Alert has a custom icon.
</CoreAlert>

<CoreAlert icon={false} severity="success">This success Alert has no icon.</CoreAlert>

<CoreAlerticonMapping={{ success: <CoreIcon fontSize="inherit" icon="check_circle_outline+ />}} >
  This success Alert uses iconMapping to override the default icon.
</CoreAlert>`}
              expandedCode={`import { CoreAlert, CoreClasses, CoreIcon, CoreStack } from "@wrappid/core";

export default function IconAlerts(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
      <CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
        This success Alert has a custom icon.
      </CoreAlert>

      <CoreAlert icon={false} severity="success">This success Alert has no icon.</CoreAlert>

      <CoreAlerticonMapping={{ success: <CoreIcon fontSize="inherit" icon="check_circle_outline+ />}} >
        This success Alert uses iconMapping to override the default icon.
      </CoreAlert>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
                  <CoreAlert icon={<CoreIcon fontSize="inherit" icon="check" />} severity="success">
        This success Alert has a custom icon.
                  </CoreAlert>

                  <CoreAlert icon={false} severity="success">
        This success Alert has no icon.
                  </CoreAlert>

                  <CoreAlert
                    iconMapping={{ success: <CoreIcon fontSize="inherit" icon="check_circle_outline" /> }}
                  >
        This success Alert uses iconMapping to override the default icon.
                  </CoreAlert>
                </CoreStack>
              }
            />

            <CodeSample
              title="Transition"
              description={
                <>
                  <CoreTypographyBody1>
                  A transition component such as CoreCollapse to transition the appearance of the alert.

                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreCollapse in={open}>
  <CoreAlert
    action={<CoreIconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        setOpen(false);
      } }
    >
      <CoreIcon fontSize="inherit">clear</CoreIcon>
    </CoreIconButton>}
    styleClasses={[CoreClasses.MARGIN.MB2]}
  >
  Close me!
  </CoreAlert>
</CoreCollapse>

<CoreButton
  disabled={open}
  variant="outlined"
  onClick={() => {
    setOpen(true);
  } }
  label="Re-open" />`}
              expandedCode={`import React from "react";

import {
  CoreAlert, CoreButton, CoreClasses, CoreCollapse, CoreIcon, CoreIconButton, CoreBox 
} from "@wrappid/core";

export default function TransitionAlerts(){
  const [open, setOpen] = React.useState(true);

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreCollapse in={open}>
        <CoreAlert
          action={<CoreIconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            } }
          >
            <CoreIcon fontSize="inherit">clear</CoreIcon>
          </CoreIconButton>}
          styleClasses={[CoreClasses.MARGIN.MB2]}
        >
        Close me!
        </CoreAlert>
      </CoreCollapse>

      <CoreButton
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        } }
        label="Re-open" />
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                    <CoreCollapse in={open}>
                      <CoreAlert
                        action={<CoreIconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          } }
                        >
                          <CoreIcon fontSize="inherit">clear</CoreIcon>
                        </CoreIconButton>}
                        styleClasses={[CoreClasses.MARGIN.MB2]}
                      >
                      Close me!
                      </CoreAlert>
                    </CoreCollapse>

                    <CoreButton
                      disabled={open}
                      variant="outlined"
                      onClick={() => {
                        setOpen(true);
                      } }
                      label="Re-open" />
                  </CoreBox>
                </>
              }
            />
          </>
        }
      />

    </>
  );
}
