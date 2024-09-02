import { CoreTimeRangePicker } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreTimeRangePickerDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreTimeRangePicker}
        description={"The Time Range Picker lets the user select a range of time."}
        samples={
          <>
            <CodeSample
              title={"Basic CoreTimeRangePicker"}
              description={"Ability to set time ranges"}
              code={"<CoreTimeRangePicker helperText={{ end: \"Check-out\", start: \"Check-in\" }}/>"}
              expandedCode={`import { CoreDateTimeRangePicker } from "@wrappid/core";
                
export default function CoreTimeRangePicker(){
  return(
    <CoreTimeRangePicker helperText={{ end: "Check-out", start: "Check-in" }}/>
  );                
}`}
              renderElement={<>
                <CoreTimeRangePicker helperText={{ end: "Check-out", start: "Check-in" }}/>
              </>}
            />
          </>
        }
      />
    </>
  );
}