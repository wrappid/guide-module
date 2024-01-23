import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreIconDocs() {
  return (
    <>
      <CoreH4>CoreIcon</CoreH4>
  
      <CoreTypographyBody1>
      Guidance and suggestions for using icons with Material UI.

      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreIcon} /> */}
      
    </>
  );
}