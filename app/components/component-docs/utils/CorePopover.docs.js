import * as React from "react";

import {
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreH4,
  CorePopover,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CorePopoverDocs() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <CoreH4>CorePopover</CoreH4>
  
      <CoreTypographyBody1>
      A Popover can be used to display some content on top of another.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic CorePopover(NOT_WORKING) "}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox>
  <CoreButton aria-describedby={id} variant="contained" onClick={handleClick}>
   Open Popover
  </CoreButton>

  <CorePopover
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      horizontal: "left",
      vertical  : "bottom",
    }}
  >
    <CoreTypographyBody1 styleClasses = {[CoreClasses.PADDING.P2]} >The content of the Popover.</CoreTypographyBody1>
  </CorePopover>
</CoreBox>
        `}
        renderElement={<>
          <CoreBox>
            <CoreButton aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
            </CoreButton>

            <CorePopover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                horizontal: "left",
                vertical  : "bottom",
              }}
            >
              <CoreTypographyBody1 styleClasses = {[CoreClasses.PADDING.P10]} >The content of the Popover.</CoreTypographyBody1>
            </CorePopover>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Anchor playground (NOT_WORKING)"}
        description={"Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl. When it is anchorPosition, the component will, instead of anchorEl, refer to the anchorPosition prop which you can adjust to set the position of the popover."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CorePopover 
            anchorOrigin={{
              horizontal: "left",
              vertical  : "top",
            }}
            transformOrigin={{
              horizontal: "left",
              vertical  : "top",
            }}
          >
  The content of the Popover.
          </CorePopover>
        </>}
      /> 

      <CodeSample
        title={"Mouse over interaction(NOT_WORKING)"}
        description={"This demo demonstrates how to use the Popover component and the mouseover event to achieve popover behavior."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox>
            <CoreTypographyBody1
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
        Hover with a Popover.
            </CoreTypographyBody1>

            <CorePopover
              id="mouse-over-popover"
              sx={{ pointerEvents: "none" }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                horizontal: "left",
                vertical  : "bottom",
              }}
              transformOrigin={{
                horizontal: "left",
                vertical  : "top",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <CoreTypographyBody1 styleClasses = {[CoreClasses.PADDING.P2]}>I use Popover.</CoreTypographyBody1>
            </CorePopover>
          </CoreBox>
        
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CorePopover} /> */}
      
    </>
  );
}