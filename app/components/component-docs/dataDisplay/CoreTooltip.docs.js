/* eslint-disable etc/no-commented-out-code */
import * as React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreTooltip,
  CoreStack,
  CoreClasses,
  CoreIconButton,
  CoreIcon,
  CoreBox,
  CoreButton
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTooltipDocs() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  const handleTooltipClose = () => {
    setData(false);
  };

  const handleTooltipOpen = () => {
    setData(true);
  };

  return (
    <>
      <CoreH4>CoreTooltip</CoreH4>

      <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="column">

        <CoreTypographyBody1>
        Tooltips display informative text when users hover over, focus on, or tap an element.
        </CoreTypographyBody1>

        <CoreTypographyBody1>When activated, Tooltips display a text label identifying an element, such as a description of its function.</CoreTypographyBody1>

      </CoreStack>

      <CodeSample
        title={"Basic tooltip"}
        description={""}
        code={`<CoreTooltip title="Delete">
  <CoreIconButton aria-label="delete">
    <CoreIcon fontSize="medium">delete</CoreIcon>
  </CoreIconButton>
</CoreTooltip>`}
        renderElement={<>
          <CoreTooltip title="Delete">
            <CoreIconButton aria-label="delete">
              <CoreIcon fontSize="medium">delete</CoreIcon>
            </CoreIconButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Positioned tooltips"}
        description={
          <>
          The <CodeBlock>CoreTooltip</CodeBlock> has 12 placement choices. They don&#39;t have directional arrows; instead, they rely on motion emanating from the source to convey direction.
          </>
        }
        code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_100]}>
  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
    <CoreTooltip title="Add" placement="top-start" >
      <CoreButton>top-start</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="top" >
      <CoreButton>top</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="top-end" >
      <CoreButton>top-end</CoreButton>
    </CoreTooltip>
  </CoreBox>

  <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
    <CoreTooltip title="Add" placement="left-start" >
      <CoreButton>left-start</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="right-start" >
      <CoreButton>right-startt</CoreButton>
    </CoreTooltip>
  </CoreBox>

  <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
    <CoreTooltip title="Add" placement="left" >
      <CoreButton>left</CoreButton>
    </CoreTooltip> 

    <CoreTooltip title="Add" placement="right" >
      <CoreButton>right</CoreButton>
    </CoreTooltip>
  </CoreBox>

  <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
    <CoreTooltip title="Add" placement="left-end" >
      <CoreButton>left-end</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="right-end" >
      <CoreButton>right-end</CoreButton>
    </CoreTooltip>
  </CoreBox>

  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
    <CoreTooltip title="Add" placement="bottom-start" >
      <CoreButton>bottom-start</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="bottom" >
      <CoreButton>bottom</CoreButton>
    </CoreTooltip>

    <CoreTooltip title="Add" placement="bottom-end" >
      <CoreButton>bottom-end</CoreButton>
    </CoreTooltip>
  </CoreBox>
</CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_100]}>
            <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
              <CoreTooltip title="Add" placement="top-start" >
                <CoreButton>top-start</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="top" >
                <CoreButton>top</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="top-end" >
                <CoreButton>top-end</CoreButton>
              </CoreTooltip>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
              <CoreTooltip title="Add" placement="left-start" >
                <CoreButton>left-start</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="right-start" >
                <CoreButton>right-startt</CoreButton>
              </CoreTooltip>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
              <CoreTooltip title="Add" placement="left" >
                <CoreButton>left</CoreButton>
              </CoreTooltip> 

              <CoreTooltip title="Add" placement="right" >
                <CoreButton>right</CoreButton>
              </CoreTooltip>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, CoreClasses.DISPLAY.FLEX, CoreClasses.MARGIN.M1]}>
              <CoreTooltip title="Add" placement="left-end" >
                <CoreButton>left-end</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="right-end" >
                <CoreButton>right-end</CoreButton>
              </CoreTooltip>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
              <CoreTooltip title="Add" placement="bottom-start" >
                <CoreButton>bottom-start</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="bottom" >
                <CoreButton>bottom</CoreButton>
              </CoreTooltip>

              <CoreTooltip title="Add" placement="bottom-end" >
                <CoreButton>bottom-end</CoreButton>
              </CoreTooltip>
            </CoreBox>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Customization (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Arrow tooltips"}
        description={<>
        You can use the <CodeBlock>arrow</CodeBlock> prop to give your tooltip an arrow indicating which element it refers to.
        </>}
        code={`<CoreTooltip title="Add" arrow>
  <CoreButton>Arrow</CoreButton>
</CoreTooltip>`}
        renderElement={<>
          <CoreTooltip title="Add" arrow>
            <CoreButton>Arrow</CoreButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Distance from anchor"}
        description={<>
        To adjust the distance between the tooltip and its anchor, you can use the <CodeBlock>slotProps</CodeBlock> prop to modify the offset of the popper.
        </>}
        code={`<CoreTooltip
  title="Add"
  slotProps={{
    popper: {
      modifiers: [
        {
          name   : "offset",
          options: { offset: [0, -14] },
        }
      ]
    }
  }}
  > 
  <CoreButton>Arrow</CoreButton>
</CoreTooltip>`}
        renderElement={<>
          <CoreTooltip
            title="Add"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name   : "offset",
                    options: { offset: [0, -14] },
                  }
                ]
              }
            }}
          > 
            <CoreButton>Arrow</CoreButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={" "}
        description={<>
       Alternatively, you can use the slotProps prop to customize the margin of the popper.
       (NOT WORKING)
        </>}
        code={""}
        renderElement={<>
        </>}
      />

      <CodeSample
        title={"Custom child element (NOT_WORKING)"}
        description={"The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Triggers (NOT_WORKING)"}
        description={
          <>
          You can define the types of events that cause a tooltip to show.<br/><br/>

          The touch action requires a long press due to the <CodeBlock>enterTouchDelay</CodeBlock> prop 

          being set to <CodeBlock>700</CodeBlock>ms by default.
          </>
        }
        code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >
  <CoreTooltip disableFocusListener title="Add">
    <CoreButton>Hover or touch</CoreButton>
  </CoreTooltip>

  <CoreTooltip disableHoverListener title="Add">
    <CoreButton>Focus or touch</CoreButton>
  </CoreTooltip>

  <CoreTooltip disableFocusListener disableTouchListener title="Add">
    <CoreButton>Hover</CoreButton>
  </CoreTooltip>

  <CoreTooltip
    PopperProps={{ disablePortal: true }}
    onClose={handleTooltipClose}
    open={data}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    title="Add"
  >
    <CoreButton onClick={handleTooltipOpen}>Click</CoreButton>
  </CoreTooltip>
</CoreBox>`}
        renderElement={<>
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >

            <CoreTooltip disableFocusListener title="Add">
              <CoreButton>Hover or touch</CoreButton>
            </CoreTooltip>

            <CoreTooltip disableHoverListener title="Add">
              <CoreButton>Focus or touch</CoreButton>
            </CoreTooltip>

            <CoreTooltip disableFocusListener disableTouchListener title="Add">
              <CoreButton>Hover</CoreButton>
            </CoreTooltip>
          
            <CoreTooltip
              PopperProps={{ disablePortal: true }}
              onClose={handleTooltipClose}
              open={data}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Add"
            >
              <CoreButton onClick={handleTooltipOpen}>Click</CoreButton>
            </CoreTooltip>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Controlled tooltips (NOT_WORKING)"}
        description={"You can use the open, onOpen and onClose props to control the behavior of the tooltip."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreTooltip
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            title="Add">
            <CoreButton>Controlled</CoreButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Variable width (NOT_WORKING)"}
        description={"The CoreTooltip wraps long text by default to make it readable."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Interactive (NOT_WORKING)"}
        description={"Tooltips are interactive by default (to pass WCAG 2.1 success criterion 1.4.13). It won't close when the user hovers over the tooltip before the leaveDelay is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing disableInteractive."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Disabled elements (NOT_WORKING)"}
        description={""}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Transitions (NOT_WORKING)"}
        description={""}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Follow cursor (NOT_WORKING)"}
        description={""}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Virtual element (NOT_WORKING)"}
        description={""}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreTooltip
            title="Add"
            placement="top"
            arrow
            PopperProps={{
              anchorEl: {
                getBoundingClientRect: () => {
                  return new DOMRect(
                    positionRef.current.x,
                    areaRef.current.getBoundingClientRect().y,
                    0,
                    0
                  );
                },
              },
              popperRef,
            }}
          >
            <CoreBox
              ref={areaRef}
              onMouseMove={handleMouseMove}
              sx={{
                bgcolor: "primary.main",
                color  : "primary.contrastText",
                p      : 2,
              }}
            >
              <CoreTypographyBody1> Hover</CoreTypographyBody1>
            </CoreBox>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Accessibility (NOT_WORKING)"}
        description={""}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreTooltip} />
    </>
  );
}
