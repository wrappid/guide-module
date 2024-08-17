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
  CoreButton,
  CoreSpan,
  CoreAwayListner
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

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
      <CoreH4>CoreTooltip</CoreH4>

      <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="column">

        <CoreTypographyBody1>
        Tooltips display informative text when users hover over, focus on, or tap an element.
        </CoreTypographyBody1>

        <CoreTypographyBody1>When activated, Tooltips display a text label identifying an element, such as a description of its function.</CoreTypographyBody1>

      </CoreStack>

      <CodeSample
        title={"Basic tooltip"}
        description={" "}
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
        description={"Here are some examples of customizing the component."}
        code={`
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
  
<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
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
        You can use the <CodeBlock>open</CodeBlock>, 

          <CodeBlock>onOpen</CodeBlock> and 

          {" "}

          <CodeBlock> onClose</CodeBlock> props to control the behavior of the tooltip.
        </>}
        code={`<CoreTooltip
  open={open}
  onClose={handleClose}
  onOpen={handleOpen}
  title="Add">
  <CoreButton>Controlled</CoreButton>
</CoreTooltip>`}
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
        description={<>Tooltips are interactive by default. It won&#39;t close when the user hovers over the tooltip before the <CodeBlock>leaveDelay</CodeBlock> is expired. You can disable this behavior by passing 

          {" "}

          <CodeBlock>disableInteractive</CodeBlock>.</>}
        code={`<CoreTooltip title="Add" disableInteractive>
  <CoreButton>Not interactive</CoreButton>
</CoreTooltip>`}
        renderElement={<>
          <CoreTooltip title="Add" disableInteractive>
            <CoreButton>Not interactive</CoreButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Disabled elements"}
        description={<>
        By default disabled elements like <CodeBlock>{"<button>"}</CodeBlock> do not trigger user interactions so a 

          <CodeBlock>Tooltip</CodeBlock> will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as 

          a <CodeBlock>span</CodeBlock>.

        </>}
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
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title="Add"
  >
    <CoreButton>Fade</CoreButton>
  </CoreTooltip>

  <CoreTooltip TransitionComponent={Zoom} title="Add">
    <CoreButton>Zoom</CoreButton>
  </CoreTooltip>
</CoreBox>`}
        renderElement={<>
        </>}
      />

      <CodeSample
        title={"Follow cursor"}
        description={<>
        You can enable the tooltip to follow the cursor by setting <CodeBlock>{"followCursor={true}"}</CodeBlock>.

        </>}
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
        title={"Accessibility"}
        description={<>
        The tooltip is normally shown immediately when the user&apos; mouse hovers over the element, and hides immediately when the user&apos; mouse leaves. A delay in showing or hiding the tooltip can be added through the<CodeBlock>enterDelay</CodeBlock> 

        and <CodeBlock>leaveDelay</CodeBlock> props.

          <br/><br/>

        On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the <CodeBlock>disableTouchListener</CodeBlock> prop.
        </>}
        code={`<CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
  <CoreButton>[500ms, 200ms]</CoreButton>
</CoreTooltip>`}
        renderElement={<>
          <CoreTooltip title="Add" enterDelay={500} leaveDelay={200}>
            <CoreButton>[500ms, 200ms]</CoreButton>
          </CoreTooltip>
        </>}
      />

      <CodeSample
        title={"Accessibility"}
        description={<>
        By default, the tooltip only labels its child element. This is notably different from title which can either label or describe its child depending on whether the child already has a label. For example, in: 
          <br/><br/>

          <CodeBlock>{"<Corebutton title=\"some more information\">A button</Corebutton>"}</CodeBlock>

          <br/><br/>
          the title acts as an accessible description. If you want the tooltip to act as an accessible description you can pass describeChild. Note that you shouldn&#39;t use describeChild if the tooltip provides the only visual label.
        </>}
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

      <ComponentProps component={CoreTooltip} />
    </>
  );
}
