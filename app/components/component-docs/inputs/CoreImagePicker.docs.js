import {
  CoreH4,
  CoreImagePicker,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreImagePickerDocs() {
  return (
    <>
      <CoreH4>CoreImagePicker</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Simple CoreImagePicker"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreImagePicker></CoreImagePicker>
        `}
        renderElement={<>
          <CoreImagePicker></CoreImagePicker>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreImagePicker} /> */}
      
    </>
  );
}