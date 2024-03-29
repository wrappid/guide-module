import {
  CoreDateRangepicker,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreDateRangepickerDocs() {
  return (
    <>
      <CoreH4>CoreDateRangepicker</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreDateRangepicker></CoreDateRangepicker>
        `}
        renderElement={<>
        </>}
      />
        
      <ComponentProps component={CoreDateRangepicker} />
      
    </>
  );
}