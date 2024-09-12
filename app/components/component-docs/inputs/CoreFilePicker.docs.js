import { CoreFilePicker } from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreFilePickerDocs() {
  return (
    <ComponentDocs
      component={CoreFilePicker}
      description="The CoreFilePicker helps to directly upload file."
      samples={
        <>
          <CodeSample
            title={"Label & Helper Text"}
            description="CoreFilePicker can use label and helper text props. Here is a example of it"
            code={"<CoreFilePicker label=\"Profile Photo\" helperText=\"JPEG and PNG Formate Only\"></CoreFilePicker>"}
            expandedCode={`import { CoreFilePicker } from "@wrappid/core";
export default function BasicCoreBox() {
  return (
    <CoreFilePicker label="Profile Photo" helperText="JPEG and PNG Formate Only"></CoreFilePicker>
  );
}`}
            renderElement={<>
              <CoreFilePicker label="Profile Photo" helperText="JPEG and PNG Formate Only"></CoreFilePicker>
            </>}
          />

        </>
      }
    />
  );
}