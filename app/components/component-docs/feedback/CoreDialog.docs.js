import React from "react";

// eslint-disable-next-line import/no-unresolved
import Slide from "@mui/material/Slide";
import {
  CoreH4,
  CoreTypographyBody1,
  CoreButton,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemAvatar,
  CoreAvatar,
  CoreListItemText,
  CoreBox,
  CoreDialog,
  CoreDialogContext
  // CoreSimpleDialog
  // CoreDialogTitle
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const emails = ["username@gmail.com", "userPritam@gmail.com"];

function CoreSimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    
    <CoreBox onClose={handleClose} open={open}>
      <CoreH4>Set backup account</CoreH4>

      <CoreList>
        {emails.map((email) => (
          <CoreListItem disablePadding key={email}>
            <CoreListItemButton onClick={() => handleListItemClick(email)}>
              <CoreListItemAvatar>
                <CoreAvatar src="/broken-image.jpg" />
              </CoreListItemAvatar>

              <CoreListItemText primary={email} />
            </CoreListItemButton>
          </CoreListItem>
        ))}

        <CoreListItem disablePadding>
          <CoreListItemButton autoFocus onclick={() => handleListItemClick("addAccount")}>
            <CoreListItemAvatar>
              <CoreAvatar src="https://placehold.co/400x400?text=%2B" />
            </CoreListItemAvatar>

            <CoreListItemText primary="Add account" />
          </CoreListItemButton>
        </CoreListItem>
      </CoreList>
    </CoreBox>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CoreDialogDocs() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const { setDialog } = React.useContext(CoreDialogContext);
  
  React.useEffect(() => {
    
    setDialog({
      dialogProps: { TransitionComponent: Transition },
      showDialog : true,
      subtitle   : "Password changed successfully.",
      title      : "Success"
    });
  }, [open]);

  const handleClickOpen = () => {
    // eslint-disable-next-line no-console
    console.log("Hello");
    setOpen(!open);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <ComponentDocs
        component={CoreDialog}
        description="CoreDialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. 
        A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
        Dialogs are purposefully interruptive, so they should be used sparingly."
        samples={
          <>
            <CodeSample
              title={"Introduction"}
              description={"Dialogs are implemented using a collection of related components:Dialog: the parent component that renders the modal.Dialog Title: a wrapper used for the title of a Dialog.Dialog Actions: an optional container for a Dialog's Buttons.Dialog Content: an optional container for displaying the Dialog's content.Dialog Content Text: a wrapper for text inside of <DialogContent />.Slide: optional Transition used to slide the Dialog in from the edge of the screen."}
              renderElement={
                <>
                  <CoreBox>

                    <CoreTypographyBody1>
                    Selected: {selectedValue}
                    </CoreTypographyBody1>

                    <br />

                    <CoreButton variant="outlined" onClick={handleClickOpen}>
                    Open simple dialog
                    </CoreButton>

                    <CoreSimpleDialog
                      selectedValue={selectedValue}
                      open={open}
                      onClose={handleClose}
                    />
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
