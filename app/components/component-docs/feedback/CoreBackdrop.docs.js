import React from "react";

import {
  CoreTypographyBody1,
  CoreBackdrop,
  CoreStack,
  CoreButton,
  CoreClasses,
  CoreCircularProgress
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";
 
export default function CoreBackdropDocs() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ComponentDocs
        component={CoreBackdrop}
        description={
          
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyBody1>
        The CoreBackdrop component narrows the user s focus to a particular
        element on the screen.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        The Backdrop signals a state change within the application and can be
        used for creating loaders, dialogs, and more. In its simplest form,
        the Backdrop component will add a dimmed layer over your application.
            </CoreTypographyBody1>
          </CoreStack>
        }
        samples={
          <>
            <CodeSample
              title={"Basic Backdrop"}
              description={
                <>
                  <CoreTypographyBody1>
            The demo below shows a basic CoreBackdrop with a Circular Progress component in the foreground to indicate a loading state. After clicking Show Backdrop, you can click anywhere on the page to close it.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreButton
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
</CoreBackdrop>`}
              expandedCode={`import React from "react";

import { CoreBackdrop, CoreButton, CoreCircularProgress, CoreClasses } from "@wrappid/core";
const [open, setOpen] = React.useState(false);

export default function BasicBackDrop(){
  return(
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
  );
}`}
              renderElement={
                <>
                 
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
                </>
              }
            />

            <CodeSample
              title={"Backdrop with transitionDuration"}
              description={
                <>
                  <CoreTypographyBody1>
                  The transitionDuration prop in CoreBackdrop controls the duration of the fade-in and fade-out animations when the backdrop appears and disappears.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreButton
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
  transitionDuration={{ enter: 10000, exit: 10000 }}
>
  <CoreCircularProgress color="inherit" />
</CoreBackdrop>`}
              expandedCode={`import React from "react";

import { CoreBackdrop, CoreButton, CoreCircularProgress, CoreClasses } from "@wrappid/core";
const [open, setOpen] = React.useState(false);

export default function BasicBackDrop(){
  return(
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
      transitionDuration={{ enter: 10000, exit: 10000 }}
    >
      <CoreCircularProgress color="inherit" />
    </CoreBackdrop>
  );
}`}
              renderElement={
                <>
                 
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
                    transitionDuration={{ enter: 10000, exit: 10000 }}
                  >
                    <CoreCircularProgress color="inherit" />
                  </CoreBackdrop>
                </>
              }
            />

          </>
        }
      />

    </>
  );
}
