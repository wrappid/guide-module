import {
  CoreH4,
  CoreH6,
  CoreTypographyBody1,
  CoreTypographySubtitle1,
  CoreDivider,
  CoreAlert,
  CoreStack,
  CoreButton,
  CoreClasses,
  CoreIconButton,
  CoreCollapse,
  CoreBox,
  CoreIcon,
  // CoreAlertTitle
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import React from "react";

export default function CoreAlertDocs() {
  const [open, setOpen] = React.useState(true);
  return (
    <>

      <CoreH4>CoreAlert</CoreH4>
      <CoreTypographyBody1>
        A CoreAlert displays a short, important message in a way that attracts
        the user's attention without interrupting the user's task.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic alerts"}
        description={
          "The CoreAlert offers four severity levels that set a distinctive icon and color"
        }
        code={`<CoreAlert severity="error">This is an error CoreAlert</CoreAlert>
<CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
<CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
<CoreAlert severity="success">This is an success CoreAlert</CoreAlert>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreAlert
              severity="error"
              styleClasses={[CoreClasses.WIDTH.W_100]}
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
      <CoreAlert severity="error">
        Description Error: CoreAlertTitle is Not Implemented
      </CoreAlert>
      <CodeSample
        title={"Description (NOT IMPLEMENTED)"}
        description={
          "You can use the AlertTitle component to display a formatted title above the content."
        }
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
      <CoreDivider />
      <CoreAlert severity="error">
        Actions Error: CoreButton is not working, X(cross) and undo button.
      </CoreAlert>
      <CodeSample
        title={"Actions (BUTTON NOT WORKING)"}
        description={
          "An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert. \
        If an onClose callback is provided and no action prop is set, a close icon is displayed. The action prop can be used to provide an alternative action, for example using a Button or CoreIconButton."
        }
        code={`<CoreAlert onClose={() => {}}>This is a success CoreAlert </CoreAlert>
<CoreAlert
  action={
    <CoreButton color="inherit" size="small">
      UNDO
    </CoreButton>
  }
>
  This is a success CoreAlert 
</CoreAlert>`}
        renderElement={
          <CoreStack spacing={2}>
            <CoreAlert onClose={() => {}}>
              This is a success CoreAlert
            </CoreAlert>
            <CoreAlert
              action={
                <CoreButton color="inherit" size="small">
                  UNDO
                </CoreButton>
              }
            >
              This is a success CoreAlert
            </CoreAlert>
          </CoreStack>
        }
      />

      <CoreAlert severity="error">
        Transition errors: X(cross) not comming. Button Label not comming.
        Button is disabled.
      </CoreAlert>

      <CodeSample
        title={"Transition"}
        description={
          "You can use a transition component such as CoreCollapse to transition the appearance of the alert."
        }
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
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
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
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
              >
                Re-open
              </CoreButton>
            </CoreBox>
          </>
        }
      />
      <CoreAlert severity="error">
        Icons Error: Icon mapping not known, 1st example wrong success icon
      </CoreAlert>
      <CodeSample
        title={"Icons"}
        description={
          <>
            <CoreTypographyBody1>
              The icon prop allows you to add an icon to the beginning of the
              alert component. This will override the default icon for the
              specified severity.
            </CoreTypographyBody1>
            <CoreTypographyBody1>
              You can change the default severity to icon mapping with the
              iconMapping prop. This can be defined globally using theme
              customization.
            </CoreTypographyBody1>
            <CoreTypographyBody1>
              Setting the icon prop to false will remove the icon altogether.
            </CoreTypographyBody1>
          </>
        }
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreAlert
              // icon={<CoreCheckIcon fontSize="inherit" />}
              icon={<CoreIcon fontSize="inherit">clear</CoreIcon>}
              severity="success"
            >
              This is a success CoreAlert
            </CoreAlert>
            <CoreAlert
            // iconMapping={{
            //   success: <CoreCheckCircleOutlineIcon fontSize="inherit" />,
            // }}
            >
              This is a success CoreAlert
            </CoreAlert>
            <CoreAlert icon={false} severity="success">
              This is a success CoreAlert
            </CoreAlert>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Variants"}
        description={
          <>
            <CoreTypographyBody1>
              Two additional variants are available – outlined, and filled:
            </CoreTypographyBody1>

            <CoreTypographySubtitle1>
              When using an outlined alert with the Snackbar component,
              background content will be visible and bleed through the alert by
              default. You can prevent this by adding bgcolor:
              'background.paper' to thesx prop on the Alert component.
            </CoreTypographySubtitle1>
          </>
        }
        code={`<CoreAlert variant="outlined" severity="error">
  This is an error CoreAlert 
</CoreAlert>
<CoreAlert variant="outlined" severity="warning">
  This is a warning CoreAlert 
</CoreAlert>
<CoreAlert variant="outlined" severity="info">
  This is an info CoreAlert 
</CoreAlert>
<CoreAlert variant="outlined" severity="success">
  This is a success CoreAlert 
</CoreAlert>

<CoreAlert variant="filled" severity="error">
  This is an error CoreAlert 
</CoreAlert>
<CoreAlert variant="filled" severity="warning">
  This is a warning CoreAlert 
</CoreAlert>
<CoreAlert variant="filled" severity="info">
  This is an info CoreAlert 
</CoreAlert>
<CoreAlert variant="filled" severity="success">
  This is a success CoreAlert 
</CoreAlert>
`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreAlert variant="outlined" severity="error">
              This is an error CoreAlert
            </CoreAlert>
            <CoreAlert variant="outlined" severity="warning">
              This is a warning CoreAlert
            </CoreAlert>
            <CoreAlert variant="outlined" severity="info">
              This is an info CoreAlert
            </CoreAlert>
            <CoreAlert variant="outlined" severity="success">
              This is a success CoreAlert
            </CoreAlert>
            <CoreAlert variant="filled" severity="error">
              This is an error CoreAlert
            </CoreAlert>
            <CoreAlert variant="filled" severity="warning">
              This is a warning CoreAlert
            </CoreAlert>
            <CoreAlert variant="filled" severity="info">
              This is an info CoreAlert
            </CoreAlert>
            <CoreAlert variant="filled" severity="success">
              This is a success CoreAlert
            </CoreAlert>
          </CoreStack>
        }
      />
      <CoreAlert severity="warning">
        Toast Warning: Don't know what to do
      </CoreAlert>
      <CodeSample
        title={"Toast"}
        description={
          <>
            <CoreTypographyBody1>
              You can use the Snackbar to display a toast with the Alert.
            </CoreTypographyBody1>
          </>
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
        code={`<CoreAlert severity="success" color="info">
  This is a success CoreAlert with info color.
</CoreAlert>
<CoreAlert severity="info" color="success">
  This is a info CoreAlert with success color.
</CoreAlert>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreAlert severity="success" color="info">
              This is a success CoreAlert with info color.
            </CoreAlert>
            <CoreAlert severity="info" color="success">
              This is a info CoreAlert with success color.
            </CoreAlert>
          </CoreStack>
        }
      />
      <ComponentProps component={CoreAlert} />
    </>
  );
}
