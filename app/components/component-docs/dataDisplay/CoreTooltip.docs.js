/* eslint-disable etc/no-commented-out-code */
import * as React from "react";

import {
  CoreTypographyBody1,
  CoreTooltip,
  CoreStack,
  CoreClasses,
  CoreIconButton,
  CoreIcon,
  CoreBox,
  CoreButton,
  CoreSpan,
  CoreAwayListner
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

function CustomComponents(){
  return(
    <>
      <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
      Tooltip with CustomComponents
      </CoreTypographyBody1>

      <CoreTypographyBody1>
           And here&apos; ssomeamazing content. It&apos; very engaging. Right?
      </CoreTypographyBody1>
    </>
  );
}

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

  const longText = `Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.`;

  return (
    <>
      <ComponentDocs
        component={CoreTooltip}
        description={
          <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="column">
    
            <CoreTypographyBody1>
            CoreTooltips display informative text when users hover over, focus on, or tap an element.
            </CoreTypographyBody1>
    
            <CoreTypographyBody1>When activated, Tooltips display a text label identifying an element, such as a description of its function.</CoreTypographyBody1>
    
          </CoreStack>}
        samples={
          <>
            <CodeSample
              title={"Basic tooltip"}
              description={" "}
              code={`<CoreTooltip title="Delete">
  <CoreIconButton aria-label="delete">
    <CoreIcon fontSize="medium">delete</CoreIcon>
  </CoreIconButton>
</CoreTooltip>`}
              expandedCode={`import {
  CoreTooltip,
  CoreIconButton,
  CoreIcon
} from "@wrappid/core";

export default function BasicTooltip() {
  return (
    <CoreTooltip title="Delete">
      <CoreIconButton aria-label="delete">
        <CoreIcon fontSize="medium">delete</CoreIcon>
      </CoreIconButton>
    </CoreTooltip>
  );
}`}
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
          The <CodeBlock>CoreTooltip</CodeBlock> has 12 placement choices. They do not have directional arrows; instead, they rely on motion emanating from the source to convey direction.
                </>
              }
              code={"NA"}
              expandedCode={`import {
  CoreTooltip,
  CoreClasses,
  CoreBox,
  CoreButton
} from "@wrappid/core";

export default function PositionedTooltips() {
  return (
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
  );
}`}
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
              title={"Customization"}
              description={"Here are example of customizing the component."}
              expandedCode={`import { CoreTooltip, CoreButton, CoreTypographyBody1, CoreClasses, CoreBox } from "@wrappid/core";
  
function CustomComponents(){
  return(
    <>
      <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY_DARK]}>
      Tooltip with CustomComponents
      </CoreTypographyBody1>

      <CoreTypographyBody1>
           And here&apos; ssomeamazing content. It&apos; very engaging. Right?
      </CoreTypographyBody1>
    </>
  );
}

export default function CustomizedTooltips() {
  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
      <CoreTooltip
        title={
          <CustomComponents/>
        }
      >
        <CoreButton>HTML</CoreButton>
      </CoreTooltip>
    </CoreBox>
  );
}`}
              code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
  <CoreTooltip
    title={<CustomComponents/>}
  >
    <CoreButton>HTML</CoreButton>
  </CoreTooltip>
</CoreBox>
`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
                  <CoreTooltip
                    title={
                      <CustomComponents/>
                    }
                  >
                    <CoreButton>HTML</CoreButton>
                  </CoreTooltip>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Arrow tooltips"}
              description={<>
        Use <CodeBlock>arrow</CodeBlock> prop to give your tooltip an arrow indicating which element it refers to.
              </>}
              code={`<CoreTooltip title="Add" arrow>
  <CoreButton>Arrow</CoreButton>
</CoreTooltip>`}
              expandedCode={`import { CoreTooltip, CoreButton } from "@wrappid/core";

export default function ArrowTooltips() {
  return (
    <CoreTooltip title="Add" arrow>
      <CoreButton>Arrow</CoreButton>
    </CoreTooltip>
  );
}`}
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
              code={"NA"}
              expandedCode={`import { CoreTooltip, CoreButton } from "@wrappid/core";

export default function TooltipOffset() {
  return (
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
      <CoreButton>OFFSET</CoreButton>
    </CoreTooltip>
  );
}`}
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
                  <CoreButton>OFFSET</CoreButton>
                </CoreTooltip>
              </>}
            />

            <CodeSample
              title={" "}
              description={<>
       Alternatively, you can use the slotProps prop to customize the margin of the popper.
       (NOT WORKING)
              </>}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Custom child element (NOT_WORKING)"}
              description={"The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element."}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Triggers"}
              description={
                <>
                  <CoreTypographyBody1>Define the types of events that cause a tooltip to show.The touch action requires a long press due to the <CodeBlock>enterTouchDelay</CodeBlock> prop being set 

                  to <CodeBlock>700</CodeBlock>ms by default.
                  </CoreTypographyBody1>
                </>
              }
              expandedCode={`import * as React from "react";

import {
  CoreClasses,
  CoreBox,
  CoreButton,
  CoreAwayListner,
  CoreTooltip
} from "@wrappid/core";

export default function TriggersTooltips() {
  const [data, setData] = React.useState(false);
  
  const handleTooltipClose = () => {
    setData(false);
  };

  const handleTooltipOpen = () => {
    setData(true);
  };

  return (
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

      <CoreAwayListner onClickAway={handleTooltipClose} >
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
      </CoreAwayListner>
    </CoreBox>
  );
}`}
              code={"NA"}
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
          
                  <CoreAwayListner onClickAway={handleTooltipClose} >

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
                  </CoreAwayListner>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Controlled tooltips"}
              description={<>
                <CoreTypographyBody1>
                  Use the <CodeBlock>open</CodeBlock>, 

                  <CodeBlock>onOpen</CodeBlock> and 

                  {" "}<CodeBlock> onClose</CodeBlock> props to control the behavior of the tooltip.
                </CoreTypographyBody1>
              </>}
              code={`<CoreTooltip
  open={open}
  onClose={handleClose}
  onOpen={handleOpen}
  title="Add">
  <CoreButton>Controlled</CoreButton>
</CoreTooltip>`}
              expandedCode={`import * as React from "react";

import {
  CoreTooltip,
  CoreButton
} from "@wrappid/core";

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <CoreTooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title="Add">
      <CoreButton>Controlled</CoreButton>
    </CoreTooltip>
  );
}`}
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
              description={<>
        The <CodeBlock>CoreTooltip</CodeBlock> wraps long text by default to make it readable.
              </>
              }
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<>
       
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >
                  <CoreTooltip title={longText}>
                    <CoreButton styleClasses={[CoreClasses.MARGIN.M1]}>Default Width [300px]</CoreButton>
                  </CoreTooltip>

                  <CoreBox >
                    <CoreTooltip styleClasses={[CoreClasses.WIDTH.W_100]} title={longText}>
                      <CoreButton styleClasses={[CoreClasses.MARGIN.M1]}>Custom Width [500px]</CoreButton>
                    </CoreTooltip>
                  </CoreBox>

                  <CoreTooltip styleClasses={[CoreClasses.WIDTH.MAX_W_]} title={longText}>
                    <CoreButton styleClasses={[CoreClasses.MARGIN.M1]}>No wrapping</CoreButton>
                  </CoreTooltip>
                </CoreBox>
  
              </>}
            />

            <CodeSample
              title={"Interactive"}
              description={<>Tooltips are interactive by default. It will not close when the user hovers over the tooltip before the <CodeBlock>leaveDelay</CodeBlock> is expired. You can disable this behavior by passing 

                {" "}<CodeBlock>disableInteractive</CodeBlock>.</>}
              code={`<CoreTooltip title="Add" disableInteractive>
  <CoreButton>Not interactive</CoreButton>
</CoreTooltip>`}
              expandedCode={`import { CoreTooltip, CoreButton } from "@wrappid/core";

export default function NonInteractiveTooltips() {
  return (
    <CoreTooltip title="Add" disableInteractive>
      <CoreButton>Not interactive</CoreButton>
    </CoreTooltip>
  );
}`}
              renderElement={<>
                <CoreTooltip title="Add" disableInteractive>
                  <CoreButton>Not interactive</CoreButton>
                </CoreTooltip>
              </>}
            />

            <CodeSample
              title={"Disabled elements"}
              description={<>
                <CoreTypographyBody1>
        By default disabled elements like <CodeBlock>{"<button>"}</CodeBlock> do not trigger user interactions so a 

                  <CodeBlock>Tooltip</CodeBlock> will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a 

                  <CodeBlock>span</CodeBlock>.
                </CoreTypographyBody1>
              </>}
              expandedCode={`import { CoreTooltip, CoreButton, CoreSpan } from "@wrappid/core";

export default function DisabledTooltips() {
  return (
    <CoreTooltip title="You don't have permission to do this">
      <CoreSpan>
        <CoreButton disabled>A Disabled CoreButton</CoreButton>
      </CoreSpan>
    </CoreTooltip>
  );
}`}
              code={`<CoreTooltip title="You don't have permission to do this">
  <CoreSpan>
    <CoreButton disabled>A Disabled CoreButton</CoreButton>
  </CoreSpan>
</CoreTooltip>`}
              renderElement={<>
                <CoreTooltip title="You don't have permission to do this">
                  <CoreSpan>
                    <CoreButton disabled>A Disabled CoreButton</CoreButton>
                  </CoreSpan>
                </CoreTooltip>
              </>}
            />

            <CodeSample
              title={"Transitions (NOT_WORKING)"}
              description={""}
              code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >
  <CoreTooltip title="Add">
    <CoreButton>Grow</CoreButton>
  </CoreTooltip>

  <CoreTooltip
    TransitionComponent={CoreFade}
    TransitionProps={{ timeout: 6000 }}
    title="Add"
  >
    <CoreButton>Fade</CoreButton>
  </CoreTooltip>

  <CoreTooltip TransitionComponent={CoreZoom} title="Add">
    <CoreButton>Zoom</CoreButton>
  </CoreTooltip>
</Corebox>`}
              renderElement={<>
                {/* <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} >
                  <CoreTooltip title="Add">
                    <CoreButton>Grow</CoreButton>
                  </CoreTooltip>

                  <CoreTooltip
                    TransitionComponent={CoreFade}
                    TransitionProps={{ timeout: 6000 }}
                    title="Add"
                  >
                    <CoreButton>Fade</CoreButton>
                  </CoreTooltip>

                  <CoreTooltip TransitionComponent={CoreZoom} title="Add">
                    <CoreButton>Zoom</CoreButton>
                  </CoreTooltip>
                </Corebox> */}
              </>}
            />

            <CodeSample
              title={"Follow cursor"}
              description={<>
        You can enable the tooltip to follow the cursor by setting <CodeBlock>{"followCursor={true}"}</CodeBlock>.
              </>}
              expandedCode={`import { CoreBox, CoreClasses, CoreTooltip } from "@wrappid/core";

export default function FollowCursorTooltips() {
  return (
    <CoreTooltip title="You don't have permission to do this" followCursor>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_GREY_500, CoreClasses.COLOR.TEXT_WHITE]}>
        Disabled Action
      </CoreBox>
    </CoreTooltip>
  );
}`}
              code={`<CoreTooltip title="You don't have permission to do this" followCursor>
  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_GREY_500, CoreClasses.COLOR.TEXT_WHITE]}>
  Disabled Action
  </CoreBox>
</CoreTooltip>`}
              renderElement={<>
                <CoreTooltip title="You don't have permission to do this" followCursor>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.BG.BG_GREY_500, CoreClasses.COLOR.TEXT_WHITE]}>
             Disabled Action
                  </CoreBox>
                </CoreTooltip>
              </>}
            />

            <CodeSample
              title={"Virtual element (NOT_WORKING)"}
              description={<>
        In the event you need to implement a custom placement, you can use the <CodeBlock>anchorEl</CodeBlock> prop: The value of 

        the <CodeBlock>anchorEl</CodeBlock> prop can be a reference to a fake DOM element.
              </>}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<>
                <CoreBox>
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
                         Hover
                    </CoreBox>
                  </CoreTooltip>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Showing and hiding"}
              description={<>
                <CoreTypographyBody1> 
                  The tooltip is normally shown immediately when the user{"'"}s mouse hovers over the element, and hides immediately when the user&apos; mouse leaves. A delay in showing or hiding the tooltip can be added through the

                  <CodeBlock>enterDelay</CodeBlock> 

                 and <CodeBlock>leaveDelay</CodeBlock> props.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the <CodeBlock>disableTouchListener</CodeBlock> prop.
                </CoreTypographyBody1>
              </>}
              code={`<CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
  <CoreButton>[500ms, 200ms]</CoreButton>
</CoreTooltip>`}
              expandedCode={`import { CoreTooltip, CoreButton } from "@wrappid/core";
  
export default function AccessibilityTooltips() {
  return (
    <CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
      <CoreButton>[500ms, 200ms]</CoreButton>
    </CoreTooltip>
  );
}`}
              renderElement={<>
                <CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
                  <CoreButton>[500ms, 200ms]</CoreButton>
                </CoreTooltip>
              </>}
            />

            <CodeSample
              title={"Accessibility"}
              description={<>
                <CoreTypographyBody1> By default, the tooltip only labels its child element. This is notably different from title which can either label or describe its child depending on whether the child already has a label. For example, in: </CoreTypographyBody1>

                <CoreTypographyBody1>
                  <CodeBlock>{"<Corebutton title=\"some more information\">A button</Corebutton>"}</CodeBlock>
                </CoreTypographyBody1>

                <CoreTypographyBody1>
          The title acts as an accessible description. If you want the tooltip to act as an accessible description you can pass describeChild. Note that you shouldn&#39;t use describeChild if the tooltip provides the only visual label.
                </CoreTypographyBody1>  </>}
              expandedCode={`import { CoreTooltip, CoreButton, CoreStack, CoreIconButton, CoreIcon } from "@wrappid/core";
  
export default function AccessibilityTooltips() {
  return (
    <CoreStack direction="row" spacing={2}>
      <CoreTooltip title="Delete">
        <CoreIconButton aria-label="delete">
          <CoreIcon fontSize="medium">delete</CoreIcon>
        </CoreIconButton>
      </CoreTooltip>

      <CoreTooltip describeChild title="Does not add if it already exists.">
        <CoreButton>Add</CoreButton>
      </CoreTooltip>
    </CoreStack>
  );
}`}
              code={`<CoreStack direction="row" spacing={2}>
  <CoreTooltip title="Delete">
    <CoreIconButton aria-label="delete">
      <CoreIcon fontSize="medium">delete</CoreIcon>
    </CoreIconButton>
  </CoreTooltip>

  <CoreTooltip describeChild title="Does not add if it already exists.">
    <CoreButton>Add</CoreButton>
  </CoreTooltip>
</CoreStack>`}
              renderElement={<>
                <CoreStack direction="row" spacing={2}>
                  <CoreTooltip title="Delete">
                    <CoreIconButton aria-label="delete">
                      <CoreIcon fontSize="medium">delete</CoreIcon>
                    </CoreIconButton>
                  </CoreTooltip>

                  <CoreTooltip describeChild title="Does not add if it already exists.">
                    <CoreButton>Add</CoreButton>
                  </CoreTooltip>
                </CoreStack>
              </>}
            />
          </>}
      />

    </>
  );
}
