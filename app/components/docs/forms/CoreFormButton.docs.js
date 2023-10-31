import {
    CoreH4,
    CoreTypographyBody1,
    CoreFormButton
  } from "@wrappid/core";
  
  import CodeSample from "../../../CodeSample";
  import ComponentProps from "../../../ComponentProps";
  
  export default function CoreFormButtonDocs() {
    return (
      <>
        <CoreH4>CoreFormButton</CoreH4>
  
        <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
  
        <CodeSample
          title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
          description={"DESCRIPTION_OF_THE_SAMPLE"}
          code={"PRE-FORMATTED_CODE_GOES_HERE"}
          renderElement={<></>}
        />
        
      {/* <ComponentProps component={CoreFormButton} /> */}
      
      </>
    );
  }