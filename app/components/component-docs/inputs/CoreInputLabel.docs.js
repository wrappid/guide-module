import {
  CoreH4,
  CoreInput,
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
        code={`<CoreInput >
  <CoreInputLabel shrink>Count</CoreInputLabel>
</CoreInput>
        `}
        renderElement={<>
          <CoreInput >
            <CoreInputLabel shrink>Count</CoreInputLabel>
          </CoreInput>
          
        </>}
      />
        
      {/* <ComponentProps component={CoreInputLabel} /> */}
      
    </>
  );
}