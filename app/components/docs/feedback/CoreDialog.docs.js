import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreDialog,
  CoreStack
  // CoreSimpleDialog
  // CoreDialogTitle
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreDialogDocs() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("abc" /*emails[1]*/);
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
          Dialogs inform users about a task and can contain critical
          information, require decisions, or involve multiple tasks.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          A Dialog is a type of modal window that appears in front of app
          content to provide critical information or ask for a decision. Dialogs
          disable all app functionality when they appear, and remain on screen
          until confirmed, dismissed, or a required action has been taken.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          Dialogs are purposefully interruptive, so they should be used
          sparingly.
        </CoreTypographyBody1>
      </CoreStack>

      <CodeImport name="CoreDialog" />

      <CodeSample
        title={"Basic dialog"}
        description={`
Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

Touch mechanics:

Choosing an option immediately commits the option and closes the menu
Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
 `}
        renderElement={<></>}
      />

      <ComponentProps component={CoreDialog} />
    </>
  );
}
