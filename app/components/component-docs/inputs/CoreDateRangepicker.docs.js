import { CoreDateRangepicker, CoreTypographyBody1 } from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreDateRangepickerDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreDateRangepicker}
        description={
          <>
            <CoreTypographyBody1>
          This component allows users to select a range of dates using a calendar interface. It{"'"}s a versatile and customizable tool for various date-related tasks.
            </CoreTypographyBody1>
          </>
        }
        samples={
          <>
            <CodeSample
              title={"Basic Usage"}
              description={"Ability to set minimum and maximum date ranges"}
              expandedCode={`import { CoreDateRangepicker } from "@wrappid/core";

export default function BasicCoreDateRangepicker(){
  return (
    <CoreDateRangepicker helperText={{ end: "Check-out", start: "Check-in" }} />
  );
}`}
              code={"<CoreDateRangepicker helperText={{ end: \"Check-out\", start: \"Check-in\" }} />"}
              renderElement={<>
                <CoreDateRangepicker helperText={{ end: "Check-out", start: "Check-in" }} />
              </>}
            />
          </>
        }
      />
    </>
  );
}