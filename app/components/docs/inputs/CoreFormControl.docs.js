import {
  CoreFormControl,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFormControlDocs() {
  return (
    <>
      <CoreH4>CoreFormControl</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`        
<CoreFormControl color="secondary"></CoreFormControl>
        `}
        renderElement={<>
          <CoreFormControl color="secondary"></CoreFormControl>
        </>}
      />
        
      {/* <ComponentProps component={CoreFormControl} /> */}
      
    </>
  );
}