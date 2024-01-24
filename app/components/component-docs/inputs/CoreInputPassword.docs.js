import {
  CoreH4,
  CoreInputPassword,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreInputPasswordDocs() {
  return (
    <>
      <CoreH4>CoreInputPassword</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Simple CoreInputPassword (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreInputPassword></CoreInputPassword>
        `}
        renderElement={<>
          <CoreInputPassword></CoreInputPassword>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreInputPassword} /> */}
      
    </>
  );
}