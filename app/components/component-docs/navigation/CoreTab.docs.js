/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  CoreAppBar, CoreBox, CoreClasses, CoreIcon, CoreList, CoreListItem, CoreTab, CoreTabs, CoreTypographyBody1 
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

function CoreTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CoreBox
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <CoreBox styleClasses={[CoreClasses.PADDING.P3]}>{children}</CoreBox>}
    </CoreBox>
  );
}

function a11yProps(index) {
  return {
    "aria-controls": `simple-tabpanel-${index}`,
    id             : `simple-tab-${index}`,
  };
}

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <CoreTab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

export default function CoreTabDocs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setData(newValue);
    }
  };

  const [wrapped, setwrapped] = React.useState("one");

  const WrappedHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setwrapped(newValue);
    }
  };
  
  const [colorValue, setcolorValue] = React.useState("one");

  const colorHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setcolorValue(newValue);
    }
  };
  
  const [disabledValue, setdisabledValue] = React.useState(2);

  const disableHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setdisabledValue(newValue);
    }
  };

  const [centerValue, setcenterValue] = React.useState(0);

  const centerHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setcenterValue(newValue);
    }
  };

  const [autoScrollvalue, setautoScrollvalue] = React.useState(0);

  const autoScrollHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setautoScrollvalue(newValue);
    }
  };

  const [forcedValue, setforcedValue] = React.useState(0);

  const forcedHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setforcedValue(newValue);
    }
  };

  const [preventScrollValue, setpreventScrollValue] = React.useState(0);

  const preventScrollValuehandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setpreventScrollValue(newValue);
    }
  };
  
  const [veritcalValue, setveritcalValue] = React.useState(0);

  const VerticalHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setveritcalValue(newValue);
    }
  };

  const [iconPositionValue, seticonPositionValue] = React.useState(0);

  const iconPositionHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      seticonPositionValue(newValue);
    }
  };

  const [iconValue, seticonValue] = React.useState(0);

  const iconHandleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      seticonValue(newValue);
    }
  };

  return (
    <>
      <ComponentDocs
        component={CoreTab}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
          Tabs are implemented using a collection of related components:
          </CoreTypographyBody1>

          <CoreList listType="DISC" variant="HTML">  
            <CoreListItem><CodeBlock>{"<Tab />"}</CodeBlock> - the tab element itself. Clicking on a tab displays its corresponding panel.</CoreListItem>

            <CoreListItem>
              <CodeBlock>{"<Tabs />"}</CodeBlock>  - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.
            </CoreListItem>
          </CoreList>
  
        </>}
        samples={
          <>
            <CodeSample
              title={"Basic tabs"}
              description={"A basic example with tab panels."}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreBox styleClasses={[CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_GREY_300]}>
    <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <CoreTab label="Item One" {...a11yProps(0)} />
      <CoreTab label="Item Two" {...a11yProps(1)} />
      <CoreTab label="Item Three" {...a11yProps(2)} />
    </CoreTabs>
  </CoreBox>
  <CoreTabPanel value={value} index={0}>
    Item One
  </CoreTabPanel>
  <CoreTabPanel value={value} index={1}>
    Item Two
  </CoreTabPanel>
  <CoreTabPanel value={value} index={2}>
    Item Three
  </CoreTabPanel>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";

function CoreTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <CoreBox
      role="tabpanel"
      hidden={value !== index}
      id={\`simple-tabpanel-\${index}\`}
      aria-labelledby={\`simple-tab-\${index}\`}
      {...other}
    >
      {value === index && <CoreBox styleClasses={[CoreClasses.PADDING.P3]}>{children}</CoreBox>}
    </CoreBox>
  );
}

function a11yProps(index) {
  return {
    "aria-controls": \`simple-tabpanel-\${index}\`,
    id             : \`simple-tab-\${index}\`,
  };
}
                
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreBox styleClasses={[CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_GREY_300]}>
        <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <CoreTab label="Item One" {...a11yProps(0)} />
          <CoreTab label="Item Two" {...a11yProps(1)} />
          <CoreTab label="Item Three" {...a11yProps(2)} />
        </CoreTabs>
      </CoreBox>
      <CoreTabPanel value={value} index={0}>
        Item One
      </CoreTabPanel>
      <CoreTabPanel value={value} index={1}>
        Item Two
      </CoreTabPanel>
      <CoreTabPanel value={value} index={2}>
        Item Three
      </CoreTabPanel>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreBox styleClasses={[CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_GREY_300]}>
                    <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <CoreTab label="Item One" {...a11yProps(0)} />

                      <CoreTab label="Item Two" {...a11yProps(1)} />

                      <CoreTab label="Item Three" {...a11yProps(2)} />
                    </CoreTabs>
                  </CoreBox>

                  <CoreTabPanel value={value} index={0}>
                    Item One
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={1}>
                    Item Two
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={2}>
                    Item Three
                  </CoreTabPanel>
                </CoreBox>
              </>}
            />  

            <CodeSample
              title={"Wrapped labels"}
              description={"Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible."}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    aria-label="wrapped label tabs example"
  >
    <CoreTab
      value="one"
      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
      wrapped
    />
    <CoreTab value="two" label="Item Two" />
    <CoreTab value="three" label="Item Three" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <CoreTab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <CoreTab value="two" label="Item Two" />
        <CoreTab value="three" label="Item Three" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreTabs
                    value={wrapped}
                    onChange={WrappedHandleChange}
                    aria-label="wrapped label tabs example"
                  >
                    <CoreTab
                      value="one"
                      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
                      wrapped
                    />

                    <CoreTab value="two" label="Item Two" />

                    <CoreTab value="three" label="Item Three" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />  

            <CodeSample
              title={"Colored tab"}
              description={" "}
              code={` <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    aria-label="wrapped label tabs example"
  >
    <CoreTab
      value="one"
      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
      wrapped
    />
    <CoreTab value="two" label="Item Two" />
    <CoreTab value="three" label="Item Three" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <CoreTab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <CoreTab value="two" label="Item Two" />
        <CoreTab value="three" label="Item Three" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreTabs
                    value={colorValue}
                    onChange={colorHandleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                  >
                    <CoreTab value="one" label="Item One" />

                    <CoreTab value="two" label="Item Two" />

                    <CoreTab value="three" label="Item Three" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />  

            <CodeSample
              title={"Disabled tab"}
              description={"A tab can be disabled by setting the disabled prop."}
              code={` <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    aria-label="wrapped label tabs example"
  >
    <CoreTab
      value="one"
      label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
      wrapped
    />
    <CoreTab value="two" label="Item Two" />
    <CoreTab value="three" label="Item Three" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function ColorTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <CoreTab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <CoreTab value="two" label="Item Two" />
        <CoreTab value="three" label="Item Three" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreTabs value={disabledValue} onChange={disableHandleChange} aria-label="disabled tabs example">
                  <CoreTab label="Active" />

                  <CoreTab label="Disabled" disabled />

                  <CoreTab label="Active" />
                </CoreTabs>
              </>}
            />  

            <CodeSample
              title={"Full width(NOT WORKING)"}
              description={" "}
              code={" "}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function FullWidth() {
   const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreAppBar position="static">
                    <CoreTabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullWidth"
                      aria-label="full width tabs example"
                    >
                      <CoreTab label="Item One" {...a11yProps(0)} />

                      <CoreTab label="Item Two" {...a11yProps(1)} />

                      <CoreTab label="Item Three" {...a11yProps(2)} />
                    </CoreTabs>
                  </CoreAppBar>

                  <CoreTabPanel value={value} index={0} >
                      Item One
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={1} >
                      Item Two
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={2} >
                      Item Three
                  </CoreTabPanel>
                </CoreBox>
              </>}
            />  

            <CodeSample
              title={"Centered"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreTabs value={value} onChange={handleChange} centered>
    <CoreTab label="Item One" />
    <CoreTab label="Item Two" />
    <CoreTab label="Item Three" />
  </CoreTabs>
</CoreBox>
                `}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function CenteredTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreTabs value={value} onChange={handleChange} centered>
        <CoreTab label="Item One" />
        <CoreTab label="Item Two" />
        <CoreTab label="Item Three" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreTabs value={centerValue} onChange={centerHandleChange} centered>
                    <CoreTab label="Item One" />

                    <CoreTab label="Item Two" />

                    <CoreTab label="Item Three" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />
            
            <CodeSample
              title={"Automatic scroll buttons"}
              description={" "}
              code={` <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="auto"
    aria-label="scrollable auto tabs example"
  >
    <CoreTab label="Item One" />
    <CoreTab label="Item Two" />
    <CoreTab label="Item Three" />
    <CoreTab label="Item Four" />
    <CoreTab label="Item Five" />
    <CoreTab label="Item Six" />
    <CoreTab label="Item Seven" />
  </CoreTabs>
</CoreBox>
                `}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <CoreTab label="Item One" />
        <CoreTab label="Item Two" />
        <CoreTab label="Item Three" />
        <CoreTab label="Item Four" />
        <CoreTab label="Item Five" />
        <CoreTab label="Item Six" />
        <CoreTab label="Item Seven" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreTabs
                    value={autoScrollvalue}
                    onChange={autoScrollHandleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    <CoreTab label="Item One" />

                    <CoreTab label="Item Two" />

                    <CoreTab label="Item Three" />

                    <CoreTab label="Item Four" />

                    <CoreTab label="Item Five" />

                    <CoreTab label="Item Six" />

                    <CoreTab label="Item Seven" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Forced scroll buttons"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons
    allowScrollButtonsMobile
    aria-label="scrollable force tabs example"
  >
    <CoreTab label="Item One" />
    <CoreTab label="Item Two" />
    <CoreTab label="Item Three" />
    <CoreTab label="Item Four" />
    <CoreTab label="Item Five" />
    <CoreTab label="Item Six" />
    <CoreTab label="Item Seven" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function ForcedScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <CoreTab label="Item One" />
        <CoreTab label="Item Two" />
        <CoreTab label="Item Three" />
        <CoreTab label="Item Four" />
        <CoreTab label="Item Five" />
        <CoreTab label="Item Six" />
        <CoreTab label="Item Seven" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreTabs
                    value={forcedValue}
                    onChange={forcedHandleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                  >
                    <CoreTab label="Item One" />

                    <CoreTab label="Item Two" />

                    <CoreTab label="Item Three" />

                    <CoreTab label="Item Four" />

                    <CoreTab label="Item Five" />

                    <CoreTab label="Item Six" />

                    <CoreTab label="Item Seven" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Prevent scroll buttons"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreTabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons={false}
    aria-label="scrollable prevent tabs example"
  >
    <CoreTab label="Item One" />
    <CoreTab label="Item Two" />
    <CoreTab label="Item Three" />
    <CoreTab label="Item Four" />
    <CoreTab label="Item Five" />
    <CoreTab label="Item Six" />
    <CoreTab label="Item Seven" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function ScrollableTabsButtonPrevent() {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <CoreTab label="Item One" />
        <CoreTab label="Item Two" />
        <CoreTab label="Item Three" />
        <CoreTab label="Item Four" />
        <CoreTab label="Item Five" />
        <CoreTab label="Item Six" />
        <CoreTab label="Item Seven" />
      </CoreTabs>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreTabs
                    value={preventScrollValue}
                    onChange={preventScrollValuehandleChange}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="scrollable prevent tabs example"
                  >
                    <CoreTab label="Item One" />

                    <CoreTab label="Item Two" />

                    <CoreTab label="Item Three" />

                    <CoreTab label="Item Four" />

                    <CoreTab label="Item Five" />

                    <CoreTab label="Item Six" />

                    <CoreTab label="Item Seven" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Veritical tabs"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.HEIGHT.VH_25]} >
  <CoreTabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    styleClasses={[CoreClasses.BORDER.BORDER_1, CoreClasses.BORDER.BORDER_GREY_300]}
  >
    <CoreTab label="Item One" {...a11yProps(0)} />
    <CoreTab label="Item Two" {...a11yProps(1)} />
    <CoreTab label="Item Three" {...a11yProps(2)} />
    <CoreTab label="Item Four" {...a11yProps(3)} />
    <CoreTab label="Item Five" {...a11yProps(4)} />
    <CoreTab label="Item Six" {...a11yProps(5)} />
    <CoreTab label="Item Seven" {...a11yProps(6)} />
  </CoreTabs>
  <CoreTabPanel value={value} index={0}>
    Item One
  </CoreTabPanel>
  <CoreTabPanel value={value} index={1}>
    Item Two
  </CoreTabPanel>
  <CoreTabPanel value={value} index={2}>
    Item Three
  </CoreTabPanel>
  <CoreTabPanel value={value} index={3}>
    Item Four
  </CoreTabPanel>
  <CoreTabPanel value={value} index={4}>
    Item Five
  </CoreTabPanel>
  <CoreTabPanel value={value} index={5}>
    Item Six
  </CoreTabPanel>
  <CoreTabPanel value={value} index={6}>
    Item Seven
  </CoreTabPanel>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function VerticalTabs() {
   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.HEIGHT.VH_25]} >
      <CoreTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        styleClasses={[CoreClasses.BORDER.BORDER_1, CoreClasses.BORDER.BORDER_GREY_300]}
      >
        <CoreTab label="Item One" {...a11yProps(0)} />
        <CoreTab label="Item Two" {...a11yProps(1)} />
        <CoreTab label="Item Three" {...a11yProps(2)} />
        <CoreTab label="Item Four" {...a11yProps(3)} />
        <CoreTab label="Item Five" {...a11yProps(4)} />
        <CoreTab label="Item Six" {...a11yProps(5)} />
        <CoreTab label="Item Seven" {...a11yProps(6)} />
      </CoreTabs>
      <CoreTabPanel value={value} index={0}>
        Item One
      </CoreTabPanel>
      <CoreTabPanel value={value} index={1}>
        Item Two
      </CoreTabPanel>
      <CoreTabPanel value={value} index={2}>
        Item Three
      </CoreTabPanel>
      <CoreTabPanel value={value} index={3}>
        Item Four
      </CoreTabPanel>
      <CoreTabPanel value={value} index={4}>
        Item Five
      </CoreTabPanel>
      <CoreTabPanel value={value} index={5}>
        Item Six
      </CoreTabPanel>
      <CoreTabPanel value={value} index={6}>
        Item Seven
      </CoreTabPanel>
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.HEIGHT.VH_25]} >
                  <CoreTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={veritcalValue}
                    onChange={VerticalHandleChange}
                    aria-label="Vertical tabs example"
                    styleClasses={[CoreClasses.BORDER.BORDER_1, CoreClasses.BORDER.BORDER_GREY_300]}
                  >
                    <CoreTab label="Item One" {...a11yProps(0)} />

                    <CoreTab label="Item Two" {...a11yProps(1)} />

                    <CoreTab label="Item Three" {...a11yProps(2)} />

                    <CoreTab label="Item Four" {...a11yProps(3)} />

                    <CoreTab label="Item Five" {...a11yProps(4)} />

                    <CoreTab label="Item Six" {...a11yProps(5)} />

                    <CoreTab label="Item Seven" {...a11yProps(6)} />
                  </CoreTabs>

                  <CoreTabPanel value={value} index={0}>
                    Item One
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={1}>
                    Item Two
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={2}>
                    Item Three
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={3}>
                    Item Four
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={4}>
                    Item Five
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={5}>
                    Item Six
                  </CoreTabPanel>

                  <CoreTabPanel value={value} index={6}>
                     Item Seven
                  </CoreTabPanel>
                </CoreBox>
              </>}
            />   

            <CodeSample
              title={"Nav tabs"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreTabs
    value={data}
    onChange={handleChange1}
    aria-label="nav tabs example"
    role="navigation"
  >
    <LinkTab label="Page One" href="/drafts" />
    <LinkTab label="Page Two" href="/trash" />
    <LinkTab label="Page Three" href="/spam" />
  </CoreTabs>
</CoreBox>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
        <CoreTabs
          value={data}
          onChange={handleChange1}
          aria-label="nav tabs example"
          role="navigation"
        >
          <LinkTab label="Page One" href="/drafts" />
          <LinkTab label="Page Two" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </CoreTabs>
      </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  <CoreTabs
                    value={data}
                    onChange={handleChange1}
                    aria-label="nav tabs example"
                    role="navigation"
                  >
                    <LinkTab label="Page One" href="/drafts" />

                    <LinkTab label="Page Two" href="/trash" />

                    <LinkTab label="Page Three" href="/spam" />
                  </CoreTabs>
                </CoreBox>
              </>}
            />  

            <CodeSample
              title={"Icon tabs"}
              description={" "}
              code={`<CoreTabs value={value} onChange={handleChange} aria-label="icon tabs example">
  <CoreTab icon={<CoreIcon icon="phone" />} label="RECENTS" />
  <CoreTab icon={<CoreIcon icon="favorite" />} label="FAVORITES" />
  <CoreTab icon={<CoreIcon icon="person" />} label="NEARBY"  />
</CoreTabs>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function IconTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreTabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <CoreTab icon={<CoreIcon icon="phone" />} label="RECENTS" />
      <CoreTab icon={<CoreIcon icon="favorite" />}  label="FAVORITES" />
      <CoreTab icon={<CoreIcon icon="person" />} label="NEARBY"  />
    </CoreTabs>
  );
}`}
              renderElement={<>
                <CoreTabs value={iconValue} onChange={iconHandleChange} aria-label="icon tabs example">
                  <CoreTab icon={<CoreIcon icon="phone" />} label="RECENTS" />

                  <CoreTab icon={<CoreIcon icon="favorite" />} label="FAVORITES" />

                  <CoreTab icon={<CoreIcon icon="person" />} label="NEARBY" />
                </CoreTabs>
              </>}
            />  

            <CodeSample
              title={"Icon Positions"}
              description={" "}
              code={`<CoreTabs
  value={value}
  onChange={handleChange}
  aria-label="icon position tabs example"
>
  <CoreTab icon={<CoreIcon icon="phone" />} label="top" />
  <CoreTab icon={<CoreIcon icon="phone_missed" />} iconPosition="start" label="start" />
  <CoreTab icon={<CoreIcon icon="favorite" />} iconPosition="end" label="end" />
  <CoreTab icon={<CoreIcon icon="person_pin" />} iconPosition="bottom" label="bottom" />
</CoreTabs>`}
              expandedCode={`import React from "react";

import { CoreBox, CoreClasses, CoreTab, CoreTabs } from "@wrappid/core";
      
export default function IconPositionTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CoreTabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
      <CoreTab icon={<CoreIcon icon="phone" />} label="top" />
      <CoreTab icon={<CoreIcon icon="phone_missed" />} iconPosition="start" label="start" />
      <CoreTab icon={<CoreIcon icon="favorite" />} iconPosition="end" label="end" />
      <CoreTab icon={<CoreIcon icon="person_pin" />} iconPosition="bottom" label="bottom" />
    </CoreTabs>
  );
}`}
              renderElement={<>
                <CoreTabs
                  value={iconPositionValue}
                  onChange={iconPositionHandleChange}
                  aria-label="icon position tabs example"
                >
                  <CoreTab icon={<CoreIcon icon="phone" />} label="top" />

                  <CoreTab icon={<CoreIcon icon="phone_missed" />} iconPosition="start" label="start" />

                  <CoreTab icon={<CoreIcon icon="favorite" />} iconPosition="end" label="end" />

                  <CoreTab icon={<CoreIcon icon="person_pin" />} iconPosition="bottom" label="bottom" />
                </CoreTabs>
              </>}
            />     
          </>
        }
      />

    </>
  );
}