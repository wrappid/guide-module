import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreDateTimeRangePickerDocs() {
  return (
    <>
      <CoreH4>CoreDateTimeRangePicker</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (ERROR)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreDateTimeRangePicker></CoreDateTimeRangePicker>
        `}
        renderElement={<>
          {/* <CoreDateTimeRangePicker></CoreDateTimeRangePicker> */}
        </>}
      />
        
      {/* <ComponentProps component={CoreDateTimeRangePicker} /> */}
      
    </>
  );
}