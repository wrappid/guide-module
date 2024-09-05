import React from "react";

import { CoreClasses, CoreDateTimePicker, CoreStack, CoreTypographyBody1 } from "@wrappid/core";
import moment from "moment";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreDateTimePickerDocs() {
  const [value, setValue] = React.useState(moment("2024-04-17T15:30"));

  return (
    <>
      <ComponentDocs
        component={CoreDateTimePicker}
        description={"CoreDateTimePicker component allows users to select a date and time using a combined calendar and clock interface. It's a versatile and customizable tool for various date and time-related tasks."}
        samples={
          <>
            <CodeSample
              title={"Basic CoreDateTimePicker"}
              description={" "}
              expandedCode={`import { CoreDateTimePicker } from "@wrappid/core";

export default function  BasicCoreDateTimePicker(){
  return (
    <CoreDateTimePicker />
  );
}`}
              code={"<CoreDateTimePicker />"}
              renderElement={<>
                <CoreDateTimePicker />
              </>}
            />

            <CodeSample
              title={"Input Format"}
              description={"The inputFormat prop specifies the expected format of the date and time value that the user will input into the field."}
              code={`<CoreDateTimePicker 
  label="YYYY-MM-DD hh:mm:ss a"
  inputFormat="YYYY-MM-DD hh:mm:ss a"
/>
<CoreDateTimePicker 
  label="DD/MM/YYYY hh:mm"
  inputFormat="DD/MM/YYYY hh:mm"
/>`}
              expandedCode={`import { CoreDateTimePicker, CoreStack } from "@wrappid/core";

export default function  InputFormat(){
  return (
    <CoreStack direction="column" spacing={3}>
      <CoreDateTimePicker 
        label="YYYY-MM-DD hh:mm:ss a"
        inputFormat="YYYY-MM-DD hh:mm:ss a"
      />
      <CoreDateTimePicker 
        label="DD/MM/YYYY hh:mm"
        inputFormat="DD/MM/YYYY hh:mm"
      />
    </CoreStack>
  );
}`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreDateTimePicker 
                    label="YYYY-MM-DD hh:mm:ss a"
                    inputFormat="YYYY-MM-DD hh:mm:ss a"
                  />

                  <CoreDateTimePicker 
                    label="DD/MM/YYYY hh:mm"
                    inputFormat="DD/MM/YYYY hh:mm"
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Uncontrolled vs. controlled value (NOT WORKING)"}
              description={" "}
              expandedCode={`import React from "react";
import moment from "moment";
import { CoreStack, CoreDateTimePicker } from "@wrappid/core";

export default function  UncontrolledControlled(){
  const [value, setValue] = React.useState(moment("2024-04-17T15:30"));

  return (
     <CoreStack direction="column" spacing={3}>
        <CoreDateTimePicker 
          label="Uncontrolled picker"
          defaultValue={moment("2024-01-01T12:00:00").format("YYYY-MM-DD hh:mm:ss a")}
          inputFormat="YYYY-MM-DD hh:mm:ss a"
        />
        <CoreDateTimePicker 
          label="Controlled picker"
          inputFormat="YYYY-MM-DD hh:mm:ss a"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </CoreStack>
  );
}`}
              code={`<CoreDateTimePicker 
  label="Uncontrolled picker"
  defaultValue={moment("2024-01-01T12:00:00").format("YYYY-MM-DD hh:mm:ss a")}
  inputFormat="YYYY-MM-DD hh:mm:ss a"
/>
<CoreDateTimePicker 
  label="Controlled picker"
  inputFormat="YYYY-MM-DD hh:mm:ss a"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreDateTimePicker 
                    label="Uncontrolled picker"
                    defaultValue={moment("2024-01-01T12:00:00").format("YYYY-MM-DD hh:mm:ss a")}
                    inputFormat="YYYY-MM-DD hh:mm:ss a"
                  />

                  <CoreDateTimePicker 
                    label="Controlled picker"
                    inputFormat="YYYY-MM-DD hh:mm:ss a"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Form Props"}
              description={"The component can be disabled or read-only."}
              expandedCode={`import React from "react";
import moment from "moment";
import { CoreStack, CoreDateTimePicker } from "@wrappid/core";

export default function FormProps(){
  const [value, setValue] = React.useState(moment("2024-04-17T15:30"));

  return (
    <CoreStack direction="column" spacing={3}>
      <CoreDateTimePicker label="disabled" disabled />
      <CoreDateTimePicker value={value} label="readOnly" readOnly />
      <CoreDateTimePicker label="name" name="startDateTime" />
    </CoreStack>
  );
}`}
              code={`<CoreDateTimePicker label="disabled" disabled />
<CoreDateTimePicker value={value} label="readOnly" readOnly />
<CoreDateTimePicker label="name" name="startDateTime" />`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreDateTimePicker label="disabled" disabled />

                  <CoreDateTimePicker value={value} label="readOnly" readOnly />

                  <CoreDateTimePicker label="name" name="startDateTime" />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Views"}
              description={<>
                <CoreTypographyBody1>
              The component supports six views: day, month, year, hours, minutes and seconds.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                By default, the year, day, hours, and minutes views are enabled. Use the views prop to change this behavior:
                </CoreTypographyBody1>
              </>}
              expandedCode={`import { CoreStack, CoreDateTimePicker } from "@wrappid/core";

export default function Views(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.VW_25]} direction="column" spacing={3}>
      <CoreDateTimePicker
        views={["year","month","day","hours","minutes","seconds"]} 
        label={'"year"", "month", "day", "hours", "minutes" and "seconds"'}
      />
      <CoreDateTimePicker label={'"day", "hours"'} views={["day", "hours"]} />
      <CoreDateTimePicker
        views={["year","day","hours","minutes","seconds"]} 
        label={'"year", "day", "hours", "minutes", "seconds"'}
      />
    </CoreStack>
  );
}`}
              code={`<CoreDateTimePicker
  views={["year","month","day","hours","minutes","seconds"]} 
  label={'"year"", "month", "day", "hours", "minutes" and "seconds"'}
/>
<CoreDateTimePicker label={'"day", "hours"'} views={["day", "hours"]} />
<CoreDateTimePicker
  views={["year","day","hours","minutes","seconds"]} 
  label={'"year", "day", "hours", "minutes", "seconds"'}
/>`}
              renderElement={<>
                <CoreStack styleClasses={[CoreClasses.WIDTH.VW_25]} direction="column" spacing={3}>
                  <CoreDateTimePicker
                    views={[
                      "year",
                      "month",
                      "day",
                      "hours",
                      "minutes",
                      "seconds"
                    ]} 
                    label={"\"year\"\", \"month\", \"day\", \"hours\", \"minutes\" and \"seconds\""}
                  />

                  <CoreDateTimePicker label={"\"day\", \"hours\""} views={["day", "hours"]} />

                  <CoreDateTimePicker
                    views={[
                      "year",
                      "day",
                      "hours",
                      "minutes",
                      "seconds"
                    ]} 
                    label={"\"year\", \"day\", \"hours\", \"minutes\", \"seconds\""}
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={" "}
              description={<>
                <CoreTypographyBody1>
                By default, the component renders the day view on mount. Use the openTo prop to change this behavior:
                </CoreTypographyBody1>
              </>}
              expandedCode={`import { CoreStack, CoreDateTimePicker } from "@wrappid/core";

export default function CoreDateTimePickerOpenTo(){
  return (
    <CoreStack styleClasses={[CoreClasses.WIDTH.VW_25]} direction="column" spacing={3}>
      <CoreDateTimePicker label={'"year"'} openTo="year" />
      <CoreDateTimePicker label={'"hours"'} openTo="hours" />
    </CoreStack>
  );
}`}
              code={`<CoreDateTimePicker label={'"year"'} openTo="year" />
<CoreDateTimePicker label={'"hours"'} openTo="hours" />`}
              renderElement={<>
                <CoreStack styleClasses={[CoreClasses.WIDTH.VW_25]} direction="column" spacing={3}>
                  <CoreDateTimePicker label={"\"year\""} openTo="year" />

                  <CoreDateTimePicker label={"\"hours\""} openTo="hours" />
                </CoreStack>
              </>}
            />
          </>
        }
      />
    </>
  );
}