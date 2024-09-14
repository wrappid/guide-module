import React from "react";

import {
  CoreBox, CoreClasses, CoreCheckbox, CoreCollapse, CorePaper, CoreStack
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

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
      <ComponentDocs
        basicSample={false}
        component={CoreCollapse}
        description="Please provide your component description to describe what is it used for."
        samples={
          <>
            <CodeSample
              title={"Basic Collapse"}
              description={"Expand from the start edge of the child element. Use the orientation prop if you need a horizontal collapse. The collapsedSize prop can be used to set the minimum width/height when not expanded."}
              code={`<CoreStack spacing={2} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
    <CoreCheckbox
      checked={checked}
      onChange={handleChange}
      label="show"
    />
  </CoreBox>
  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
    <CoreCollapse orientation="horizontal" in={checked} collapsedSize={40}>
      <Div />        
    </CoreCollapse>
    <CoreCollapse orientation="horizontal" in={checked}>
      <Div />        
    </CoreCollapse>
  </CoreBox>
  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
    <CoreCollapse in={checked} collapsedSize={40}>
      <Div />        
    </CoreCollapse>
    <CoreCollapse in={checked}>
      <Div />        
    </CoreCollapse>
  </CoreBox>
</CoreStack>`}
              expandedCode={`import React from "react";

import {
  CoreStack,
  CoreBox,
  CoreCheckbox,
  CoreClasses,
  CoreCollapse,
  CorePaper 
} from "@wrappid/core";
   
const Div = () => {
  return (
    <CorePaper styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25]}></CorePaper>
  );
};
                
export default function BasicCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return(
    <CoreStack spacing={2} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreCheckbox
          checked={checked}
          onChange={handleChange}
          label="show"
        />
      </CoreBox>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
        <CoreCollapse orientation="horizontal" in={checked} collapsedSize={40}>
          <Div />        
        </CoreCollapse>
        <CoreCollapse orientation="horizontal" in={checked}>
          <Div />        
        </CoreCollapse>
      </CoreBox>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
        <CoreCollapse in={checked} collapsedSize={40}>
          <Div />        
        </CoreCollapse>
        <CoreCollapse in={checked}>
          <Div />        
        </CoreCollapse>
      </CoreBox>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack spacing={2} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                      <CoreCheckbox
                        checked={checked}
                        onChange={handleChange}
                        label="show"
                      />
                    </CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
                      <CoreCollapse orientation="horizontal" in={checked} collapsedSize={40}>
                        <Div />        
                      </CoreCollapse>

                      <CoreCollapse orientation="horizontal" in={checked}>
                        <Div />        
                      </CoreCollapse>
                    </CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}>
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
        }
      />
    </>
  );
}