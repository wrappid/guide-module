import {
  CoreFormErrorText,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFormErrorTextDocs() {
  return (
    <>
      <CoreH4>CoreFormErrorText</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Simple CoreFormErrorText"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreFormErrorText title="Error Message" ></CoreFormErrorText>
        `}
        renderElement={<>
          <CoreFormErrorText title="Error Message" ></CoreFormErrorText>
        </>}
      />
        
      {/* <ComponentProps component={CoreFormErrorText} /> */}
      
    </>
  );
}