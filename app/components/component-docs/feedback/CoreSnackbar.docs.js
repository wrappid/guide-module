import React from "react";

import {
  CoreAlert,
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreGrid,
  CoreIcon,
  CoreIconButton,
  CoreSnackbar,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreSnackbarDocs() {
  const [openBasic, setOpenBasic] = React.useState(false);
  const [openAutomaticSnack, setOpenAutomaticSnack] = React.useState(false);
  const [openSnackAlerts, setOpenSnackAlerts] = React.useState(false);

  const handleClickBasicOpen = () => {
    setOpenBasic(true);
  };

  const handleBasicClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenBasic(false);
  };

  const action = (
    <>
      <CoreButton
        color="secondary"
        variant="text"
        size="small"
        onClick={handleBasicClose}>
        UNDO
      </CoreButton>

      <CoreIconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleBasicClose}
      >
        <CoreIcon>close</CoreIcon>
      </CoreIconButton>
    </>
  );
  
  const [state, setState] = React.useState({
    horizontal: "center",
    open      : false,
    vertical  : "top",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreButton variant="text" onClick={handleClick({ horizontal: "center", vertical: "top" })}>
          Top-Center
        </CoreButton>
      </CoreBox>

      <CoreGrid container justifyContent="center" >
        <CoreBox gridProps={{ gridSize: { md: 6 } }}>
          <CoreButton variant="text" onClick={handleClick({ horizontal: "left", vertical: "top" })}>
            Top-Left
          </CoreButton>
        </CoreBox>

        <CoreBox gridProps={{ gridSize: { md: 6 }, styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END] }} >
          <CoreButton variant="text" onClick={handleClick({ horizontal: "right", vertical: "top" })}>
            Top-Right
          </CoreButton>
        </CoreBox>
        
        <CoreBox gridProps={{ gridSize: { md: 6 } }}>
          <CoreButton variant="text" onClick={handleClick({ horizontal: "left", vertical: "bottom" })}>
            Bottom-Left
          </CoreButton>
        </CoreBox>

        <CoreBox gridProps={{ gridSize: { md: 6 }, styleClasses: [CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END] }}>
          <CoreButton variant="text" onClick={handleClick({ horizontal: "right", vertical: "bottom" })}>
            Bottom-Right
          </CoreButton>
        </CoreBox>
      </CoreGrid>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreButton variant="text" onClick={handleClick({ horizontal: "center", vertical: "bottom" })}>
          Bottom-Center
        </CoreButton>
      </CoreBox>
    </>
  );

  const handleAutomaticSnackClick = () => {
    setOpenAutomaticSnack(true);
  };

  const handleAutomaticSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAutomaticSnack(false);
  };

  const handleClickSnackAlerts = () => {
    setOpenSnackAlerts(true);
  };

  const handleCloseSnackAlerts = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackAlerts(false);
  };

  return (
    <>
      <ComponentDocs 
        component={CoreSnackbar}
        description={"Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed."}
        samples={
          <>
            <CodeSample 
              title={"Introduction"}
              description={"The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app's processes. The demo below, inspired by Google Keep, shows a basic Snackbar with a text element and two actions:"}
              code={`<CoreBox>
  <CoreButton variant="outlined" onClick={handleClickBasicOpen}>
    Open Snackbar
  </CoreButton>

  <CoreSnackbar 
    open={openBasic}
    autoHideDuration={6000}
    onClose={handleBasicClose}
    message="Snackbar archived"
    action={action}
  />
</CoreBox>`}
              expandedCode={`import React from "react";

import {
  CoreBox,
  CoreButton,
  CoreIcon,
  CoreIconButton,
  CoreSnackbar
} from "@wrappid/core";

export default function CoreSnackbarDocs() {
  const [openBasic, setOpenBasic] = React.useState(false);

  const handleClickBasicOpen = () => {
    setOpenBasic(true);
  };

  const handleBasicClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenBasic(false);
  };

  const action = (
    <>
      <CoreButton
        color="secondary"
        variant="text"
        size="small"
        onClick={handleBasicClose}>
        UNDO
      </CoreButton>

      <CoreIconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleBasicClose}
      >
        <CoreIcon>close</CoreIcon>
      </CoreIconButton>
    </>
  );
  
  return (
    <CoreBox>
      <CoreButton variant="outlined" onClick={handleClickBasicOpen}>
        Open Snackbar
      </CoreButton>

      <CoreSnackbar 
        open={openBasic}
        autoHideDuration={6000}
        onClose={handleBasicClose}
        message="Snackbar archived"
        action={action}
      />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox>
                  <CoreButton variant="outlined" onClick={handleClickBasicOpen}>
                    Open Snackbar
                  </CoreButton>

                  <CoreSnackbar 
                    open={openBasic}
                    autoHideDuration={6000}
                    onClose={handleBasicClose}
                    message="Snackbar archived"
                    action={action}
                  />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Usage"}
              description={
                <CoreBox>
                  <CoreTypographyBody1>Snackbars differ from Alerts in that Snackbars have a fixed position and a high z-index, so they are intended to break out of the document flow; Alerts, on the other hand, are usually part of the flow—except when they are used as children of a Snackbar.</CoreTypographyBody1>

                  <CoreTypographyBody1>Snackbars also from differ from Dialogs in that Snackbars are not intended to convey critical information or block the user from interacting with the rest of the app; Dialogs, by contrast, require input from the user in order to be dismissed.</CoreTypographyBody1>
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Position"}
              description={"Use the anchorOrigin prop to control the Snackbar's position on the screen."}
              code={""}
              expandedCode={""}
              renderElement={
                <CoreBox>
                  {buttons}

                  <CoreSnackbar 
                    anchorOrigin={{ horizontal, vertical }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                  />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Content"}
              description={"This component can not implement now as we do not have Core Snack Content"}
            />

            <CodeSample 
              title={"Automatic dismiss"}
              description={<CoreBox>
                <CoreTypographyBody1>Use the autoHideDuration prop to automatically trigger the Snackbar onClose function after a set period of time (in milliseconds).</CoreTypographyBody1>
                
                <CoreTypographyBody1>Make sure to provide sufficient time for the user to process the information displayed on it.</CoreTypographyBody1>
              </CoreBox>}
              code={`<CoreBox>
  <CoreButton variant="text" onClick={handleAutomaticSnackClick}>Open Snackbar</CoreButton>

  <CoreSnackbar 
    open={openAutomaticSnack}
    autoHideDuration={4000}
    onClose={handleAutomaticSnackClose}
    message="This Snackbar will be dismissed in 4 seconds."
  />
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreButton, CoreSnackbar } from "@wrappid/core";

export default function CoreLinearProgressDocs() {
  const [openAutomaticSnack, setOpenAutomaticSnack] = React.useState(false);

  const handleAutomaticSnackClick = () => {
    setOpenAutomaticSnack(true);
  };

  const handleAutomaticSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAutomaticSnack(false);
  };
  
  return (
    <CoreBox>
      <CoreButton variant="text" onClick={handleAutomaticSnackClick}>Open Snackbar</CoreButton>

      <CoreSnackbar 
        open={openAutomaticSnack}
        autoHideDuration={4000}
        onClose={handleAutomaticSnackClose}
        message="This Snackbar will be dismissed in 4 seconds."
      />
    </CoreBox>
  );
}
`}
              renderElement={
                <CoreBox>
                  <CoreButton variant="text" onClick={handleAutomaticSnackClick}>Open Snackbar</CoreButton>

                  <CoreSnackbar 
                    open={openAutomaticSnack}
                    autoHideDuration={4000}
                    onClose={handleAutomaticSnackClose}
                    message="This Snackbar will be dismissed in 4 seconds."
                  />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Transitions"}
              description={"We can not do this as we do not have such transitions component"}
            />

            <CodeSample 
              title={"Use with Alerts"}
              description={"Use an Alert inside a Snackbar for messages that communicate a certain severity."}
              renderElement={
                <CoreBox>
                  <CoreButton onClick={handleClickSnackAlerts}>Open Snackbar</CoreButton>

                  <CoreSnackbar open={openSnackAlerts} autoHideDuration={6000} onClose={handleCloseSnackAlerts}>
                    <CoreAlert
                      onClose={handleCloseSnackAlerts}
                      severity="success"
                      variant="filled"
                      width="100%"
                    >
                      This is a success Alert inside a Snackbar!
                    </CoreAlert>
                  </CoreSnackbar>
                </CoreBox>
              }

            />
          </>
        }
      />
    </>
  );
}
