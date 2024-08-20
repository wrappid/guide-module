import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreAlert,
  CoreStack,
  CoreClasses,
  CoreIconButton,
  CoreCollapse,
  CoreIcon,
  CoreButton,
  CoreH5,
  CoreAlertTitle
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreAlertDocs() {
  const [open, setOpen] = React.useState(true);

  return (
    <>

      <CoreH4>CoreAlert</CoreH4>

      <CoreTypographyBody1>
        {"CoreAlert display brief messages for the user without interrupting their use of the app."}
      </CoreTypographyBody1>

      <CodeImport name="CoreAlert" />
      
      <CodeSample
        title={"Basic alerts"}
        description={<>
          <CoreTypographyBody1>
        The <CodeBlock>CoreAlert</CodeBlock> offers 

            {" "}<CodeBlock>four</CodeBlock> severity levels that set a distinctive icon and color
          </CoreTypographyBody1>
        </>}
        code={`<CoreAlert icon={<CoreIcon fontSize="inherit">check</CoreIcon>} severity="success">
    Here is a gentle confirmation that your action was successful.
</CoreAlert>`}
        renderElement={
          <CoreAlert icon={<CoreIcon fontSize="inherit">check</CoreIcon>} severity="success">
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

            {" "}<CodeBlock>info</CodeBlock>,

            {" "}<CodeBlock>warning</CodeBlock>, and 

            {" "}<CodeBlock>error</CodeBlock>–with corresponding icon and color combinations for each:
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert severity="error">This is an error CoreAlert</CoreAlert>
  <CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
  <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
  <CoreAlert severity="success">This is an success CoreAlert</CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreAlert
              severity="error"
            >
              This is an error CoreAlert
            </CoreAlert>

            <CoreAlert severity="warning">
              This is a warning CoreAlert
            </CoreAlert>

            <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>

            <CoreAlert severity="success">
              This is an success CoreAlert
            </CoreAlert>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Variants"}
        description={
          <>
         The CoreAlert component comes with two alternative style options—<CodeBlock>filled</CodeBlock> and

            {" "}<CodeBlock>outlined</CodeBlock>—which you can set using the 

            {" "}<CodeBlock>variant</CodeBlock> prop.

            <CoreH5>Filled</CoreH5>
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert variant="filled" severity="success">
    This is a filled success Alert.
  </CoreAlert>

  <CoreAlert variant="filled" severity="info">
    This is a filled info Alert.
  </CoreAlert>

  <CoreAlert variant="filled" severity="warning">
    This is a filled warning Alert.
  </CoreAlert>

  <CoreAlert variant="filled" severity="error">
    This is a filled error Alert.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreAlert variant="filled" severity="success">
               This is a filled success Alert.
            </CoreAlert>

            <CoreAlert variant="filled" severity="info">
              This is a filled info Alert.
            </CoreAlert>

            <CoreAlert variant="filled" severity="warning">
             This is a filled warning Alert.
            </CoreAlert>

            <CoreAlert variant="filled" severity="error">
             This is a filled error Alert.
            </CoreAlert>
          </CoreStack>
        }
      />

      <CodeSample
        title={"outlined"}
        description={" "}
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert variant="outlined" severity="success">
    This is a outlined success Alert.
  </CoreAlert>

  <CoreAlert variant="outlined" severity="info">
    This is a outlined info Alert.
  </CoreAlert>

  <CoreAlert variant="outlined" severity="warning">
    This is a outlined warning Alert.
  </CoreAlert>

  <CoreAlert variant="outlined" severity="error">
    This is a outlined error Alert.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreAlert variant="outlined" severity="success">
               This is a outlined success Alert.
            </CoreAlert>

            <CoreAlert variant="outlined" severity="info">
              This is a outlined info Alert.
            </CoreAlert>

            <CoreAlert variant="outlined" severity="warning">
             This is a outlined warning Alert.
            </CoreAlert>

            <CoreAlert variant="outlined" severity="error">
             This is a outlined error Alert.
            </CoreAlert>
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
        code={`<CoreStack direction="column" spacing={2}>
  <CoreAlert severity="success" color="info">
    This is a success CoreAlert with info color.
  </CoreAlert>

  <CoreAlert severity="info" color="success">
    This is a info CoreAlert with success color.
  </CoreAlert>

  <CoreAlert severity="warning" color="warning">
    This is a warning CoreAlert with warning color.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreAlert severity="success" color="info">
              This is a success CoreAlert with info color.
            </CoreAlert>

            <CoreAlert severity="info" color="success">
              This is a info CoreAlert with success color.
            </CoreAlert>

            <CoreAlert severity="warning" color="warning">
              This is a warning CoreAlert with warning color.
            </CoreAlert>
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
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert severity="warning" onClose={() => {}}>
  This Alert displays the default close icon.
  </CoreAlert>

  <CoreAlert
    severity="success"
    action={
      <CoreButton color="inherit" size="small">
  UNDO
      </CoreButton>
    }
  >
  This Alert uses a Button component for its action.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreAlert severity="warning" onClose={() => {}}>
        This Alert displays the default close icon.
            </CoreAlert>

            <CoreAlert
              severity="success"
              action={
                <CoreButton color="inherit" size="small">
            UNDO
                </CoreButton>
              }
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
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert icon={<CoreIcon fontSize="inherit">check</CoreIcon>} severity="success">
  This success Alert has a custom icon.
  </CoreAlert>

  <CoreAlert icon={false} severity="success">
  This success Alert has no icon.
  </CoreAlert>

  <CoreAlert
    iconMapping={{ success: <CoreIcon fontSize="inherit">check_circle_outline</CoreIcon> }}
  >
  This success Alert uses iconMapping to override the default icon.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreAlert icon={<CoreIcon fontSize="inherit">check</CoreIcon>} severity="success">
        This success Alert has a custom icon.
            </CoreAlert>

            <CoreAlert icon={false} severity="success">
        This success Alert has no icon.
            </CoreAlert>

            <CoreAlert
              iconMapping={{ success: <CoreIcon fontSize="inherit">check_circle_outline</CoreIcon> }}
            >
        This success Alert uses iconMapping to override the default icon.
            </CoreAlert>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Transition"}
        description={
          "You can use a transition component such as CoreCollapse to transition the appearance of the alert."
        }
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreCollapse in={open}>
    <CoreAlert
      action={
        <CoreIconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          {/* <CloseIcon fontSize="inherit" /> */}
          <CoreIcon fontSize="inherit">
            clear
          </CoreIcon>
        </CoreIconButton>
      }
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
    }}
  >
    Re-open
  </CoreButton>
</CoreBox>`}
        renderElement={
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
            <CoreCollapse in={open}>
              <CoreAlert
                action={
                  <CoreIconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CoreIcon fontSize="inherit">clear</CoreIcon>
                  </CoreIconButton>
                }
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
              }}
              label="Re-open" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Customization"}
        description={
          <>
            <CoreH5>Titles</CoreH5>

            <CoreTypographyBody1>
             To add a title to an Alert, import the Alert Title component:
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              <CodeBlock>
                {"import {CoreAlertTitle} from \"@wrappid/core\";"}
              </CodeBlock>
            </CoreTypographyBody1>

            <CoreTypographyBody1>
            You can nest this component above the message in your Alert for a neatly styled and properly aligned title, as shown below:
            </CoreTypographyBody1>
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
  <CoreAlert severity="success">
    <CoreAlertTitle>Success</CoreAlertTitle>
  This is a success Alert with an encouraging title.
  </CoreAlert>

  <CoreAlert severity="info">
    <CoreAlertTitle>Info</CoreAlertTitle>
  This is an info Alert with an informative title.
  </CoreAlert>

  <CoreAlert severity="warning">
    <CoreAlertTitle>Warning</CoreAlertTitle>
  This is a warning Alert with a cautious title.
  </CoreAlert>

  <CoreAlert severity="error">
    <CoreAlertTitle>Error</CoreAlertTitle>
  This is an error Alert with a scary title.
  </CoreAlert>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2}>
              <CoreAlert severity="success">
                <CoreAlertTitle>Success</CoreAlertTitle>
              This is a success Alert with an encouraging title.
              </CoreAlert>

              <CoreAlert severity="info">
                <CoreAlertTitle>Info</CoreAlertTitle>
              This is an info Alert with an informative title.
              </CoreAlert>

              <CoreAlert severity="warning">
                <CoreAlertTitle>Warning</CoreAlertTitle>
              This is a warning Alert with a cautious title.
              </CoreAlert>

              <CoreAlert severity="error">
                <CoreAlertTitle>Error</CoreAlertTitle>
              This is an error Alert with a scary title.
              </CoreAlert>
            </CoreStack>
          </>
        }
      />

      <ComponentProps component={CoreAlert} />
    </>
  );
}
