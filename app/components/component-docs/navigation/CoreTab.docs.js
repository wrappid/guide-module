import React from "react";

import {
  CoreH4,
  CoreBox, CoreClasses, CoreDivider, CorePaper, CoreStack, CoreTab, CoreTabs, CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

function CoreTabPanel(props) {
  const { value, index, ...other } = props;
  
  return (
    <CoreBox styleClases={[CoreClasses.WIDTH.VW_50]} {...other}>
      {value === index && (
        <CoreBox>
          <CoreTypographyBody1>{`Tab ${index + 1}`}</CoreTypographyBody1>
        </CoreBox>
      )}
    </CoreBox>
  );
}

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
        function CoreTabPanel(props) {
          const { value, index, ...other } = props;
          
          return (
            <CoreBox styleClases={[CoreClasses.WIDTH.VW_50]} {...other}>
              {value === index && (
                <CoreBox>
                  <CoreTypographyBody1>{Tab ${"index" + 1}}</CoreTypographyBody1>
                </CoreBox>
              )}
            </CoreBox>
          );
        }
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
        </CoreTabs>

        <CoreDivider />

        <CoreTabPanel value={value} index={0}></CoreTabPanel>

        <CoreTabPanel value={value} index={1}></CoreTabPanel>

        <CoreTabPanel value={value} index={2}></CoreTabPanel>

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