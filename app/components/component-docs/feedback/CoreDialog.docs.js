import React from "react";

// eslint-disable-next-line import/no-unresolved
import Slide from "@mui/material/Slide";
import {
  CoreButton,
  CoreBox,
  CoreDialog,
  CoreDialogContext,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreTypographyBody1
  // CoreSimpleDialog
  // CoreDialogTitle
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CoreDialogDocs() {
  // eslint-disable-next-line no-unused-vars
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [transitionsOpen, setTransitionsOpen] = React.useState(false);
  const [allPropsOpen, setAllPropsOpen] = React.useState(false);
  const [fullScreenOpen, setFullScreenOpen] = React.useState(false);
  const [scrollOpen, setScrollOpen] = React.useState(false);
  const [scrollType, setScrollType] = React.useState("paper");

  const { setDialog } = React.useContext(CoreDialogContext);
  
  //For Basic
  React.useEffect(() => {
    if (basicOpen) {
      setDialog({ 
        showDialog: true,
        subtitle  : "This is an example of a simple dialog",
        title     : "Simple Dialog" 
      });

      const timer = setTimeout(() => {
        setBasicOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [basicOpen, setDialog]);

  const handleClickBasicOpen = () => {
    setBasicOpen(true);
  };

  //For Transitions
  React.useEffect(() => {
    if (transitionsOpen) {
      setDialog({ 
        dialogProps   : { TransitionComponent: Transition, keepMounted: true },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : "Please confirm if you want to proceed with the action. You can either confirm your choice or cancel if you have changed your mind.",
        title         : "Are You Sure?",
        type          : "info"
      });

      const timer = setTimeout(() => {
        setTransitionsOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [transitionsOpen, setDialog]);

  const handleClickTransitionsOpen = () => {
    setTransitionsOpen(true);
  };

  //For Customization
  React.useEffect(() => {
    if (allPropsOpen) {
      setDialog({ 
        // eslint-disable-next-line no-console
        cancelButton     : () => console.log("Cancel clicked"),
        cancelButtonLabel: "Abort",
        // eslint-disable-next-line no-console
        doneButton       : () => console.log("Done clicked"),
        doneButtonLabel  : "Proceed",
        noCancelButton   : false,
        noDoneButton     : false,
        // eslint-disable-next-line no-console
        onClose          : () => console.log("Dialog closed"),
        showDialog       : true,
        subtitle         : "Customize the dialog by specifying all valid properties and their values, including actions for buttons and the close event.",
        title            : "Customize Dialog",
        type             : "info"
      });

      const timer = setTimeout(() => {
        setAllPropsOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [allPropsOpen, setDialog]);

  const handleClickAllPropsOpen = () => {
    setAllPropsOpen(true);
  };

  //For Full Screen
  React.useEffect(() => {
    if (fullScreenOpen) {
      setDialog({ 
        dialogProps   : { TransitionComponent: Transition, fullScreen: true },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : "You are about to make important adjustments to your application settings. Please review all changes carefully to ensure they meet your preferences. If you are satisfied with the modifications, click 'Done' to confirm and apply these updates. If you wish to discard the changes and return to your previous settings, simply select 'Cancel'. This ensures that no unintended alterations are made, and you can revisit your preferences later if needed.",
        title         : "Review and Confirm Your Changes",
        type          : "info"
      });

      const timer = setTimeout(() => {
        setFullScreenOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [fullScreenOpen, setDialog]);

  const handleClickFScreenOpen = () => {
    setFullScreenOpen(true);
  };

  //For Full Screen Scroll
  React.useEffect(() => {
    if (scrollOpen) {
      setDialog({ 
        dialogProps   : { scroll: scrollType },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : [...new Array(50)]
          .map(() => `
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        `).join("\n"),
        title: "Review and Confirm Your Changes",
        type : "info"
      });

      const timer = setTimeout(() => {
        setScrollOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [scrollOpen, setDialog, scrollType]);

  const handleClickScrollOpen = (type) => {
    setScrollType(type);
    setScrollOpen(true);
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
              description={
                <CoreBox>
                  <CoreList variant="HTML" listType="DISC">
                    <CoreListItem disablePadding>
                      <CoreListItemText primary="To use a dialog in your application, you must set up an event function in your component, such as an onClick handler in a CoreButton." />
                    </CoreListItem>

                    <CoreListItem disablePadding>
                      <CoreListItemText primary="Within your event handler, you should call the setDialog function. This function takes a JSON object as an argument, which defines how the dialog should behave and appear." />
                    </CoreListItem>

                    <CoreListItem disablePadding>
                      <CoreListItemText primary="Bypassing the necessary properties in this JSON object, you can control various aspects of the dialog, such as its visibility, title, content, and button actions." />
                    </CoreListItem>
                  </CoreList>
                </CoreBox> 
              }
            />

            <CodeSample
              title={"Basic"}
              description={"If simply pass showDialog: true in the setDialog function, the dialog box will work and become visible. For a basic example, you can enhance the dialog's appearance by including properties like title and description. "}
              code={`<CoreButton variant="outlined" onClick={handleClickBasicOpen}>
  Open Basic Dialog
</CoreButton>`}
              expandedCode={`import React from "react";

import {
  CoreButton,
  CoreBox,
  CoreDialogContext
} from "@wrappid/core";

export default function CoreDialogDocs() {
  const [basicOpen, setbasicOpen] = React.useState(false);

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (basicOpen) {
      setDialog({ 
        showDialog: true,
        subtitle  : "This is an example of a simple dialog",
        title     : "Simple Dialog" 
      });

      const timer = setTimeout(() => {
        setbasicOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [basicOpen, setDialog]);

  const handleClickOpen = () => {
    setbasicOpen(true);
  };

  return (
    <>
      <CoreBox>
        <CoreButton variant="outlined" onClick={handleClickOpen}>
          Open Basic Dialog
        </CoreButton>
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreButton variant="outlined" onClick={handleClickBasicOpen}>
                      Open Basic Dialog
                    </CoreButton>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Transitions"}
              description={"We can also swap in the transition, the next example uses Slide."}
              code={`<CoreButton variant="outlined" onClick={handleClickTransitionsOpen}>
  Slide in Dialog
</CoreButton>`}
              expandedCode={`import React from "react";

// eslint-disable-next-line import/no-unresolved
import Slide from "@mui/material/Slide";
import {
  CoreButton,
  CoreBox,
  CoreDialogContext
} from "@wrappid/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CoreDialogDocs() {
  const [transitionsOpen, setTransitionsOpen] = React.useState(false);

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (transitionsOpen) {
      setDialog({ 
        dialogProps   : { TransitionComponent: Transition, keepMounted: true },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : "Please confirm if you want to proceed with the action. You can either confirm your choice or cancel if you have changed your mind.",
        title         : "Are You Sure?",
        type          : "info"
      });

      const timer = setTimeout(() => {
        setTransitionsOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [transitionsOpen, setDialog]);

  const handleClickTransitionsOpen = () => {
    setTransitionsOpen(true);
  };

  return (
    <>
      <CoreBox>
        <CoreButton variant="outlined" onClick={handleClickTransitionsOpen}>
          Slide in Dialog
        </CoreButton>
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreButton variant="outlined" onClick={handleClickTransitionsOpen}>
                      Slide in Dialog
                    </CoreButton>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Form dialogs(Not Implemented)"}
            />

            <CodeSample
              title={"Customization"}
              description={"Pass all valid properties with appropriate values to fully customize the dialog. Additionally, for cancelButton, doneButton, and onClose, we can pass functions that define what actions should occur when the Cancel button, Done button, or close event is triggered."}
              code={`<CoreButton variant="outlined" onClick={handleClickAllPropsOpen}>
  Open Dialog
</CoreButton>`}
              expandedCode={`import React from "react";

import {
  CoreButton,
  CoreBox,
  CoreDialogContext
} from "@wrappid/core";

export default function CoreDialogDocs() {
  const [allPropsOpen, setAllPropsOpen] = React.useState(false);

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (allPropsOpen) {
      setDialog({ 
        // eslint-disable-next-line no-console
        cancelButton     : () => console.log("Cancel clicked"),
        cancelButtonLabel: "Abort",
        // eslint-disable-next-line no-console
        doneButton       : () => console.log("Done clicked"),
        doneButtonLabel  : "Proceed",
        noCancelButton   : false,
        noDoneButton     : false,
        // eslint-disable-next-line no-console
        onClose          : () => console.log("Dialog closed"),
        showDialog       : true,
        subtitle         : "Password changed successfully.",
        title            : "Success",
        type             : "info"
      });

      const timer = setTimeout(() => {
        setAllPropsOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [allPropsOpen, setDialog]);

  const handleClickAllPropsOpen = () => {
    setAllPropsOpen(true);
  };

  return (
    <>
      <CoreBox>
        <CoreButton variant="outlined" onClick={handleClickAllPropsOpen}>
          Open Dialog
        </CoreButton>
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreButton variant="outlined" onClick={handleClickAllPropsOpen}>
                      Open Dialog
                    </CoreButton>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Full-screen dialogs"}
              description={"Passing the fullScreen prop makes the dialog display in full-screen mode. In the example, we use this prop to enable the full-screen view of the dialog."}
              code={`<CoreButton variant="outlined" onClick={handleClickFScreenOpen}>
  Open Full-Screen Dialog
</CoreButton>`}
              expandedCode={`import React from "react";

// eslint-disable-next-line import/no-unresolved
import Slide from "@mui/material/Slide";
import {
  CoreButton,
  CoreBox,
  CoreDialogContext
} from "@wrappid/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CoreDialogDocs() {
  const [fullScreenOpen, setFullScreenOpen] = React.useState(false);

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (fullScreenOpen) {
      setDialog({ 
        dialogProps   : { TransitionComponent: Transition, fullScreen: true },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : "You are about to make important adjustments to your application settings. Please review all changes carefully to ensure they meet your preferences. If you are satisfied with the modifications, click 'Done' to confirm and apply these updates. If you wish to discard the changes and return to your previous settings, simply select 'Cancel'. This ensures that no unintended alterations are made, and you can revisit your preferences later if needed.",
        title         : "Review and Confirm Your Changes",
        type          : "info"
      });

      const timer = setTimeout(() => {
        setFullScreenOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [fullScreenOpen, setDialog]);

  const handleClickFScreenOpen = () => {
    setFullScreenOpen(true);
  };

  return (
    <>
      <CoreBox>
        <CoreButton variant="outlined" onClick={handleClickFScreenOpen}>
            Open Full-Screen Dialog
        </CoreButton>
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreButton variant="outlined" onClick={handleClickFScreenOpen}>
                      Open Full-Screen Dialog
                    </CoreButton>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Optional sizes(Not Implemented)"}
            />

            <CodeSample
              title={"Responsive full-screen(Not Implemented)"}
              description={"Problem to fetch screen size"}
            />

            <CodeSample
              title={"Confirmation dialogs(Not Implemented)"}
            />

            <CodeSample
              title={"Non-modal dialog(Not Implemented)"}
              description={"There is no uses of dialog"}
            />

            <CodeSample
              title={"Draggable dialog(Not Implemented)"}
              description={"Currently if we want to implement this feature then we have to use react-draggable"}
            />

            <CodeSample
              title={"Full-screen Scroll dialogs"}
              description={
                <>
                  <CoreBox>
                    <CoreTypographyBody1>{"When dialogs become too long for the user's viewport or device, they scroll."}</CoreTypographyBody1>

                    <CoreList variant="HTML" listType="DISC">
                      <CoreListItem disablePadding>
                        <CoreListItemText primary="scroll=paper the content of the dialog scrolls within the paper element." />
                      </CoreListItem>

                      <CoreListItem disablePadding>
                        <CoreListItemText primary="scroll=body the content of the dialog scrolls within the body element." />
                      </CoreListItem>
                    </CoreList>

                    <CoreTypographyBody1>{"Try the demo below to see what we mean:"}</CoreTypographyBody1>

                  </CoreBox> 
                </>
              }
              code={`<CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("paper")}>
  Open Scroll Dialog
</CoreButton>

<CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("body")}>
  Open Body-Scroll Dialog
</CoreButton>`}
              expandedCode={`import React from "react";

import {
  CoreButton,
  CoreBox,
  CoreDialogContext
} from "@wrappid/core";

export default function CoreDialogDocs() {
  const [scrollOpen, setScrollOpen] = React.useState(false);
  const [scrollType, setScrollType] = React.useState("paper");

  const { setDialog } = React.useContext(CoreDialogContext);

  React.useEffect(() => {
    if (scrollOpen) {
      setDialog({ 
        dialogProps   : { scroll: scrollType },
        noCancelButton: false, 
        noDoneButton  : false,
        showDialog    : true,
        subtitle      : [...new Array(50)]
          .map(() => ` + "`" + `
            Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        ` + "`" + `).join(""),
        title: "Review and Confirm Your Changes",
        type : "info"
      });

      const timer = setTimeout(() => {
        setScrollOpen(false);
      }, 500); 

      return () => clearTimeout(timer); 
    }
  }, [scrollOpen, setDialog, scrollType]);

  const handleClickScrollOpen = (type) => {
    setScrollType(type);
    setScrollOpen(true);
  };

  return (
    <>
      <CoreBox>
        <CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("paper")}>
            Open Scroll Dialog
        </CoreButton>

        <CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("body")}>
            Open Body-Scroll Dialog
        </CoreButton>
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("paper")}>
                      Open Scroll Dialog
                    </CoreButton>

                    <CoreButton variant="outlined" onClick={()=>handleClickScrollOpen("body")}>
                      Open Body-Scroll Dialog
                    </CoreButton>
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
