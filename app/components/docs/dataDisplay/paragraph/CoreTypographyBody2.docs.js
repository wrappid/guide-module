import {
    CoreH4,
    CoreTypographyBody1,
    CoreTypographyBody2
  } from "@wrappid/core";
  
  import CodeSample from "../../../CodeSample";
  import ComponentProps from "../../../ComponentProps";
  
  export default function CoreTypographyBody2Docs() {
    return (
      <>
        <CoreH4>CoreTypographyBody2</CoreH4>
  
        <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
  
        <CodeSample
          title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
          description={"DESCRIPTION_OF_THE_SAMPLE"}
          code={"PRE-FORMATTED_CODE_GOES_HERE"}
          renderElement={<></>}
        />
        
      {/* <ComponentProps component={CoreTypographyBody2} /> */}
      
      </>
    );
  }