import {
  CoreH4,
  CoreJSONEditor,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreJSONEditorDocs() {
  return (
    <>
      <CoreH4>CoreJSONEditor</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Simple CoreJSONEditor (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreJSONEditor></CoreJSONEditor>
        `}
        renderElement={<>
          <CoreJSONEditor label="Json Editor"></CoreJSONEditor>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreJSONEditor} /> */}
      
    </>
  );
}