import {
    CoreH4,
    CoreTypographyBody1,
    CoreDataTableDetailsPane
  } from "@wrappid/core";
  
  import CodeSample from "../../../CodeSample";
  import ComponentProps from "../../../ComponentProps";
  
  export default function CoreDataTableDetailsPaneDocs() {
    return (
      <>
        <CoreH4>CoreDataTableDetailsPane</CoreH4>
  
        <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
  
        <CodeSample
          title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
          description={"DESCRIPTION_OF_THE_SAMPLE"}
          code={"PRE-FORMATTED_CODE_GOES_HERE"}
          renderElement={<></>}
        />
        
      {/* <ComponentProps component={CoreDataTableDetailsPane} /> */}
      
      </>
    );
  }