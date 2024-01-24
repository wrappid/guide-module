import React from "react";

import {
  CoreH4,
  CoreSnackbar,
  CoreTypographyBody1,
  CoreBox,
  CoreButton,
  CoreStack,
  CoreClasses,
  CoreIconButton,
  CoreIcon,
  CoreAlert
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSnackbarDocs() {
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
    // <React.Fragment>
    <>
      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreButton label="Top-Center" onClick={handleClick({ horizontal: "center", vertical: "top" })}>
        </CoreButton>
      </CoreBox>

      <CoreStack direction="row" container styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>

        <CoreButton label="Top-Left" onClick={handleClick({ horizontal: "left", vertical: "top" })}>
        </CoreButton>

        <CoreButton label="Top-Right" onClick={handleClick({ horizontal: "right", vertical: "top" })}>
        </CoreButton>
      </CoreStack>

      <CoreStack direction="row" container styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}>

        <CoreButton label="Bottom-Left" onClick={handleClick({ horizontal: "left", vertical: "bottom" })} />

        <CoreButton label="Bottom-Right" onClick={handleClick({ horizontal: "right", vertical: "bottom" })} />
      </CoreStack>

      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreButton label="Bottom-Center" onClick={handleClick({ horizontal: "center", vertical: "bottom" })}>
          Bottom-Center
        </CoreButton>
      </CoreBox>

      {/* </React.Fragment> */}
    </>
  );

  //
  const [opeN, setOpen] = React.useState(false);
  const handleClicK = () => {
    setOpen(true);
  };

  const handleClosE = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // <React.Fragment>
  const action = (
    <><CoreButton color="secondary" size="small" onClick={handleClosE}>
    UNDO
    </CoreButton><CoreIconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClosE}
    >
      <CoreIcon fontSize="small" >close</CoreIcon>
    </CoreIconButton></>
  );

  {/* eslint-disable-next-line etc/no-commented-out-code */}
  {/*// </React.Fragment>
  const Action = (
    <CoreButton color="secondary" size="small">
      lorem ipsum dolorem
    </CoreButton>
  );*/}
  
  return (
    <>
      <CoreH4>{"CoreSnackbar (NOT DEFINED)"}</CoreH4>

      <CoreTypographyBody1>
        Snackbars provide brief notifications. The component is also known as a
        toast.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Snackbars inform users of a process that an app has performed or will
        perform. They appear temporarily, towards the bottom of the screen. They
        should not interrupt the user experience, and they do not require user
        input to disappear.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Snackbars contain a single line of text directly related to the
        operation performed. They may contain a text action, but no icons. You
        can use them to display notifications.
      </CoreTypographyBody1>

      <CodeImport name="CoreSnackbar" />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* 
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      /> */}

      <CodeSample
        title={"Simple snackbars(NOT WORKING)"}
        description={
          "A basic snackbar that aims to reproduce Google Keep's snackbar behavior."
        }
        code={`
<CoreButton onClick={handleClick}>Open simple snackbar</CoreButton>

    <CoreSnackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={action}
      />
        
        `}
        renderElement={<>
          <CoreButton label="Open simple snackbar" onClick={handleClicK}></CoreButton>

          <CoreSnackbar
            open={opeN}
            autoHideDuration={6000}
            onClose={handleClosE}
            message="Note archived"
            action={action}
          />
        </>}
      />

      <CodeSample
        title={"Customization (NOT WORKING)"}
        description={
          "Here are some examples of customizing the component. You can learn more about this in the overrides documentation page."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_100]} direction="column" spacing={2} >
            <CoreButton
              label="Open success snackbar"
              variant="outlined"
              onClick={handleClicK}>
            </CoreButton>

            <CoreSnackbar open={opeN} autoHideDuration={6000} onClose={handleClosE}>
              <CoreAlert onClose={handleClosE} severity="success" >
          This is a success message!
              </CoreAlert>
            </CoreSnackbar>

            <CoreAlert severity="error">This is an error message!</CoreAlert>

            <CoreAlert severity="warning">This is a warning message!</CoreAlert>

            <CoreAlert severity="info">This is an information message!</CoreAlert>

            <CoreAlert severity="success">This is a success message!</CoreAlert>
          </CoreStack>
        
        </>}
      />

      <CodeSample
        title={"Positioned snackbars(NOT WORKING)"}
        description={
          "In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the anchorOrigin prop."
        }
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
{buttons}

<CoreSnackbar
  anchorOrigin={{ horizontal, vertical }}
  open={open}
  onClose={handleClose}
  message="I love snacks"
  key={vertical + horizontal}
/>
</CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>   {/* 300 */}
            {buttons}

            <CoreSnackbar
              anchorOrigin={{ horizontal, vertical }}
              open={open}
              onClose={handleClose}
              message="I love snacks"
              key={vertical + horizontal}
            />
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Message Length (NOT WORKING)"}
        description={"Some snackbars with varying message length."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreStack spacing={2} styleClasses={[CoreClasses.WIDTH.MIN_W_100]} >
            {/* <SnackbarContent message="I love snacks." action={Action} />

            <SnackbarContent
              message={
                "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
              }
            />

            <SnackbarContent
              message="I love candy. I love cookies. I love cupcakes."
              action={Action}
            />

            <SnackbarContent
              message={
                "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
              }
              action={Action}
            /> */}
          </CoreStack>
        
        </>}
      />

      <CodeSample
        title={"Transitions (NOT WORKING)"}
        description={
          "Consecutive Snackbars\
        When multiple snackbar updates are necessary, they should appear one at a time.   "
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Snackbars and floating action buttons (FABs)(NOT WORKING)"}
        description={"Snackbars should appear above FABs (on mobile)."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Change transition (NOT WORKING)"}
        description={
          "Grow is the default transition but you can use a different one."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Control Slide direction (NOT WORKING)"}
        description={
          "You can change the direction of the Slide transition.\
        Example of making the slide transition to the left:"
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Complementary projects (NOT WORKING)"}
        description={`For more advanced use cases you might be able to take advantage of:
notistack
This example demonstrates how to use notistack. notistack has an imperative API that makes it easy to display snackbars, without having to handle their open/close state. It also enables you to stack them on top of one another (although this is discouraged by the Material Design guidelines).
        `}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Accessibility (NOT WORKING)"}
        description={`By default, the snackbar won't auto-hide. However, if you decide to use the autoHideDuration prop, it's recommended to give the user sufficient time to respond.
        When open, every Snackbar will be dismissed if Escape is pressed. Unless you don't handle onClose with the "escapeKeyDown" reason. If you want to limit this behavior to only dismiss the oldest currently open Snackbar call event.preventDefault in onClose.
        `}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreSnackbar} />
    </>
  );
}
