import {
  CoreH4,
  CoreInputLabel,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreInputLabelDocs() {
  return (
    <>
      <CoreH4>CoreInputLabel</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Simple CoreInputLabel (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreInputLabel></CoreInputLabel>
        `}
        renderElement={<>
          <CoreInputLabel></CoreInputLabel>
        </>}
      />
        
      {/* <ComponentProps component={CoreInputLabel} /> */}
      
    </>
  );
}