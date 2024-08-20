import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreDivider,
  CoreBackdrop,
  CoreStack,
  CoreButton,
  CoreClasses,
  CoreCircularProgress
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreBackdropDocs() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CoreBackdrop severity="warning">
        CoreBackdrop in not implemented in mobile
      </CoreBackdrop>

      <CoreH4>CoreBackdrop</CoreH4>

      <CoreStack direction="column" spacing={2}>
        <CoreTypographyBody1>
          The Backdrop component narrows the user s focus to a particular
          element on the screen.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          The Backdrop signals a state change within the application and can be
          used for creating loaders, dialogs, and more. In its simplest form,
          the Backdrop component will add a dimmed layer over your application.
        </CoreTypographyBody1>
      </CoreStack>

      <CodeSample
        title={"Backdrop"}
        description={
          <>
            <CoreTypographyBody1>
            The demo below shows a basic CoreBackdrop with a Circular Progress component in the foreground to indicate a loading state. After clicking Show Backdrop, you can click anywhere on the page to close it.
            </CoreTypographyBody1>
          </>
        }
        code={`<CoreStack direction="row" styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >
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
</CoreStack>`}
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
