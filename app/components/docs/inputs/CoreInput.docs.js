import {
  CoreH4,
  CoreInput,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreInputDocs() {
  return (
    <>
      <CoreH4>CoreInput</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"CoreInput"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreInput helperText="Helper Text"></CoreInput>
        `}
        renderElement={<>
          <CoreInput helperText="Helper Text"></CoreInput>
        </>}
      />
        
      {/* <ComponentProps component={CoreInput} /> */}
      
    </>
  );
}