import {
  CoreFormHelperText,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFormHelperTextDocs() {
  return (
    <>
      <CoreH4>CoreFormHelperText</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic CoreFormHelperText )"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"<CoreFormHelperText error={true} >You can display an error</CoreFormHelperText>"}
        renderElement={<>
          <CoreFormHelperText error={true} >You can display an error</CoreFormHelperText> 
        </>}
      />
        
      {/* <ComponentProps component={CoreFormHelperText} /> */}
      
    </>
  );
}