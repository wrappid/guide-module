import React from "react";

import {
  CoreBox, CoreClasses, CoreCheckbox, CoreCollapse, CorePaper, CoreStack, CoreH4, CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

const Div = () => {
  return (
    <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]}></CorePaper>
  );
};

export default function CoreCollapseDocs() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <CoreH4>CoreCollapse</CoreH4>
  
      <CoreTypographyBody1>
      Transitions help to make a UI expressive and easy to use.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Collapse"}
        description={"Expand from the start edge of the child element. Use the orientation prop if you need a horizontal collapse. The collapsedSize prop can be used to set the minimum width/height when not expanded."}
        code={
          `
          const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
          const Div = () => {
            return (
              <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]}></CorePaper>
            );
          };
          <CoreStack spacing={4} styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.HEIGHT.H_100, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2]}>
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
            <CoreCheckbox
              checked={checked}
              onChange={handleChange}
              label="show"
            />
          </CoreBox>
    
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.GAP.GAP_1]}>
            <CoreCollapse orientation="horizontal" in={checked}>
              <Div />
            </CoreCollapse>
    
            <CoreCollapse orientation="horizontal" in={checked} collapsedSize={40}>
              <Div />        
            </CoreCollapse>
          </CoreBox>
    
          <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.GAP.GAP_1]}>
            <CoreCollapse in={checked} collapsedSize={40}>
              <Div />        
            </CoreCollapse>
    
            <CoreCollapse in={checked}>
              <Div />        
            </CoreCollapse>
          </CoreBox>
        </CoreStack>
        `}
        renderElement={
          <>
            <CoreStack spacing={4} styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.HEIGHT.H_100, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2]}>
              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreCheckbox
                  checked={checked}
                  onChange={handleChange}
                  label="show"
                />
              </CoreBox>

              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.GAP.GAP_1]}>
                <CoreCollapse orientation="horizontal" in={checked}>
                  <Div />
                </CoreCollapse>

                <CoreCollapse orientation="horizontal" in={checked} collapsedSize={40}>
                  <Div />        
                </CoreCollapse>
              </CoreBox>

              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.GAP.GAP_1]}>
                <CoreCollapse in={checked} collapsedSize={40}>
                  <Div />        
                </CoreCollapse>

                <CoreCollapse in={checked}>
                  <Div />        
                </CoreCollapse>
              </CoreBox>
            </CoreStack>
          </>
        }
      />  
    </>
  );
}