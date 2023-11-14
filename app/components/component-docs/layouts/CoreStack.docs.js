import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreStackDocs() {
  return (
    <>
      <CoreH4>CoreStack</CoreH4>
  
      <CoreTypographyBody1>
      Stack is a container component for arranging elements vertically or horizontally.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_WORKING)"}
        description={"The Stack component acts as a generic container, wrapping around the elements to be arranged."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Direction (NOT_WORKING)"}
        description={"By default, Stack arranges items vertically in a column. Use the direction prop to position items horizontally in a row:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Dividers (NOT_WORKING)"}
        description={"Use the divider prop to insert an element between each child. This works particularly well with the Divider component, as shown below:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Responsive values (NOT_WORKING)"}
        description={"You can switch the direction or spacing values based on the active breakpoint."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Flexbox gap (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Interactive demo (NOT_WORKING)"}
        description={"Below is an interactive demo that lets you explore the visual results of the different settings:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* <ComponentProps component={CoreStack} /> */}
      
    </>
  );
}