import {
  CoreContainedButton,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreContainedButtonDocs() {
  return (
    <>
      <CoreH4>CoreContainedButton</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreContainedButton label="TEXT"></CoreContainedButton>
        `}
        renderElement={<>
          <CoreContainedButton
            label="TEXT"
            onClick={() => {
              alert("clicked");
            }}></CoreContainedButton>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreContainedButton} /> */}
      
    </>
  );
}