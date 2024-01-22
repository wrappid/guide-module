import {
  CoreH4,
  CoreInputAdornment,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreInputAdornmentDocs() {
  return (
    <>
      <CoreH4>CoreInputAdornment</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreInputAdornment></CoreInputAdornment>
        `}
        renderElement={<>
          <CoreInputAdornment></CoreInputAdornment>
        </>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreInputAdornment} /> */}
      
    </>
  );
}