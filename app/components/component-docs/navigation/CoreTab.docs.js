import React from "react";

import {
  CoreH4,
  CoreBox, CoreClasses, CoreDivider, CorePaper, CoreStack, CoreTab, CoreTabs, CoreTypographyBody1, CoreTabPanel
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreTabDocs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CoreH4>CoreTab</CoreH4>
  
      <CoreTypographyBody1>
      Tabs make it easy to explore and switch between different views.
      Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic tabs"}
        description={"A basic example with tab panels."}
        code={`
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
        <CoreStack component={CorePaper} styleClases={[CoreClasses.WIDTH.VW_50]}>
      <CoreBox styleClases={[CoreClasses.WIDTH.W_100]}>
        <CoreTabs value={value} onChange={handleChange} styleClases={[CoreClasses.PADDING.PX2]}>

          <CoreTab label="Home"></CoreTab>

          <CoreTab label="About"></CoreTab>

          <CoreTab label="Contact"></CoreTab>
          <CoreTabPanel value={value} index={0}>
         <CoreTypographyBody1>Tab 1</CoreTypographyBody1>
        </CoreTabPanel>

        <CoreTabPanel value={value} index={1}>
        <CoreTypographyBody1>Tab 2</CoreTypographyBody1>
        </CoreTabPanel>

        <CoreTabPanel value={value} index={2}>
        <CoreTypographyBody1>Tab 3</CoreTypographyBody1>
        </CoreTabPanel>

        
        </CoreTabs>

        <CoreDivider />
      </CoreBox>
    </CoreStack>
        `}
        renderElement={<>
          <CoreStack component={CorePaper} styleClases={[CoreClasses.WIDTH.VW_50]}>
            <CoreBox styleClases={[CoreClasses.WIDTH.W_100]}>
              <CoreTabs value={value} onChange={handleChange} styleClases={[CoreClasses.PADDING.PX2]}>

                <CoreTab label="Home"></CoreTab>

                <CoreTab label="About"></CoreTab>

                <CoreTab label="Contact"></CoreTab>
              </CoreTabs>

              <CoreDivider />

              <CoreTabPanel value={value} index={0}></CoreTabPanel>

              <CoreTabPanel value={value} index={1}></CoreTabPanel>

              <CoreTabPanel value={value} index={2}></CoreTabPanel>

            </CoreBox>
          </CoreStack>
        </>}
      />  
    </>
  );
}