import {
  CoreFilePicker,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFilePickerDocs() {
  return (
    <>
      <CoreH4>CoreFilePicker</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreFilePicker label="Profile Photo" helperText="JPEG and PNG Formate Only"></CoreFilePicker>
        `}
        renderElement={<>
          <CoreFilePicker label="Profile Photo" helperText="JPEG and PNG Formate Only"></CoreFilePicker>
        </>}
      />
        
      {/* <ComponentProps component={CoreFilePicker} /> */}
      
    </>
  );
}