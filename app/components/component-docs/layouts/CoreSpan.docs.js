import {
  CoreH4,
  CoreTypographyBody1, CoreClasses, CoreSpan
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreSpanDocs() {
  return (
    <>
      <CoreH4>CoreSpan</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreTypographyBody1>Add the basil, <CoreSpan styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>pine nuts and garlic</CoreSpan> to a blender and blend into a paste.</CoreTypographyBody1>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreSpan} /> */}
      
    </>
  );
}