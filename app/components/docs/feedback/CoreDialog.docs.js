import {
  CoreH4,
  CoreTypographyBody1,
  CoreDivider,
  CoreDialog,
  CoreStack,
  CoreTypographyButton,
  CoreTypographySubtitle1,
  CoreCircularProgress,
  // CoreSimpleDialog
  // CoreDialogTitle
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import React from "react";

export default function CoreDialogDocs() {
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };
//   const { onClose, selectedValue, open } = props;

const [open, setOpen] = React.useState(false);
const [selectedValue, setSelectedValue] = React.useState("abc"/*emails[1]*/);
// const { onClose} = props;
//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

  return (
    <>
      <CoreDialog severity="warning">
        CoreDialog in not implemented in mobile
      </CoreDialog>

      <CoreH4>CoreDialog</CoreH4>
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

      <CodeSample
        title={"Basic alerts"}
        description={
          "The CoreDialog offers four severity levels that set a distinctive icon and color"
        }
        code={`
const [open, setOpen] = React.useState(false);
const handleClose = () => {
    setOpen(false);
};
const handleOpen = () => {
    setOpen(true);
};
return (
    <>
<CoreTypographyButton onClick={handleOpen}>Show backdrop</CoreTypographyButton>
<CoreDialog
open={open}
onClick={handleClose}
>
<CoreCircularProgress color="inherit" />
</CoreDialog>
</>
)`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographySubtitle1>
              Selected: {selectedValue}
            </CoreTypographySubtitle1>
            <br />
            <CoreTypographyButton variant="outlined" /*onClick={handleClickOpen}*/>
              Open simple dialog
            </CoreTypographyButton>
            {/* <CoreSimpleDialog
              selectedValue={selectedValue}
              open={open}
              //onClose={handleClose}
            /> */}
          </CoreStack>
        }
      />
      <ComponentProps component={CoreDialog} />
    </>
  );
}
