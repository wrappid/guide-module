
import { CoreDateTimeRangePicker } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreDateTimeRangePickerDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreDateTimeRangePicker}
        description={"CoreDateTimeRangePicker allows users to select a range of dates and times within a specified interval.\
It's commonly used in applications where users need to specify a timeframe for events, bookings, or other activities."}
        samples={
          <>
            <CodeSample
              title={"Basic CoreDateTimeRangePicker"}
              description={"Ability to set minimum and maximum date time ranges"}
              code={"<CoreDateTimeRangePicker helperText={{ end: \"Check-out\", start: \"Check-in\" }}/>"}
              expandedCode={`import { CoreDateTimeRangePicker } from "@wrappid/core";
                
export default function BasicCoreDateTimeRangePicker(){
  return(
    <CoreDateTimeRangePicker helperText={{ end: "Check-out", start: "Check-in" }}/>
  );                
}`}
              renderElement={<>
                <CoreDateTimeRangePicker helperText={{ end: "Check-out", start: "Check-in" }}/>
              </>}
            />
          </>
        }
      />
    </>
  );
}