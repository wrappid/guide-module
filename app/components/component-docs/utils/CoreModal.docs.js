import * as React from "react";

import {
  CoreBox,
  CoreButton,
  CoreH4,
  CoreModal,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreModalDocs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CoreH4>CoreModal</CoreH4>
  
      <CoreTypographyBody1>
      The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
      </CoreTypographyBody1>
      Basic modal

      <CodeSample
        title={"Basic CoreModal (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox>
            <CoreButton onClick={handleOpen}>Open modal</CoreButton>

            <CoreModal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CoreBox >
                <CoreTypographyBody1 id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
                </CoreTypographyBody1>

                <CoreTypographyBody1 id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </CoreTypographyBody1>
              </CoreBox>
            </CoreModal>
          </CoreBox>
        
        </>}
      />

      <CodeSample
        title={"Nested modal (NOT_WORKING)"}
        description={"Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>

        </>}
      />

      <CodeSample
        title={"Transitions (NOT_WORKING)"}
        description={"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Performance (NOT_WORKING)"}
        description={"The content of modal is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to change this default behavior by enabling the keepMounted prop:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Server-side modal (NOT_WORKING)"}
        description={"React doesn't support the createPortal() API on the server. In order to display the modal, you need to disable the portal feature with the disablePortal prop:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreModal} /> */}
      
    </>
  );
}