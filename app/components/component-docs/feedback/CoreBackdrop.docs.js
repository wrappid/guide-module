import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreDivider,
  CoreBackdrop,
  CoreStack,
  CoreButton,
  CoreClasses,
  CoreAlert,
  CoreCircularProgress
  // CoreBackdropTitle
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreBackdropDocs() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CoreBackdrop severity="warning">
        CoreBackdrop in not implemented in mobile
      </CoreBackdrop>

      <CoreH4>CoreBackdrop</CoreH4>

      <CoreStack direction="column" spacing={2}>
        <CoreTypographyBody1>
          The Backdrop component narrows the user's focus to a particular
          element on the screen.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          The Backdrop signals a state change within the application and can be
          used for creating loaders, dialogs, and more. In its simplest form,
          the Backdrop component will add a dimmed layer over your application.
        </CoreTypographyBody1>
      </CoreStack>

      <CoreAlert severity="error">
        Backdrop Error: On clinking show backdrop, backdrop comes, but does not
        closes. In MUI on clicking backdrop, page remians srollable, but here
        page is not scrolling.
      </CoreAlert>

      <CodeSample
        title={"Backdrop"}
        description={
          "The CoreBackdrop offers four severity levels that set a distinctive icon and color"
        }
        code={`<CoreStack
  direction="row"
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
>
  <CoreButton
    onClick={() => {
      setOpen(true);
    }}
  >
    Show backdrop
  </CoreButton>

  <CoreBackdrop
    styleClasses={[CoreClasses.COLOR.TEXT_WHITE, CoreClasses.Z_INDEX.Z_3]}
    open={open}
    onClick={() => {
      setOpen(false);
    }}
  >
    <CoreCircularProgress color="inherit" />
  </CoreBackdrop>
</CoreStack>
)`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton
                onClick={() => {
                  setOpen(true);
                }}
              >
                Show backdrop
              </CoreButton>

              <CoreBackdrop
                styleClasses={[CoreClasses.COLOR.TEXT_WHITE, CoreClasses.Z_INDEX.Z_3]}
                open={open}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CoreCircularProgress color="inherit" />
              </CoreBackdrop>
            </CoreStack>
          </>
        }
      />

      <CoreDivider />

      <ComponentProps component={CoreBackdrop} />
    </>
  );
}
