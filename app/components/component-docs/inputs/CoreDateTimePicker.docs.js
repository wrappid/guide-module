import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreDateTimePickerDocs() {
  return (
    <>
      <CoreH4>CoreDateTimePicker</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (ERROR)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreDateTimePicker></CoreDateTimePicker>
        `}
        renderElement={<>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreDateTimePicker} /> */}
      
    </>
  );
}