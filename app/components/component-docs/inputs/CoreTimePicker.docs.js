import React from "react";

import { CoreTimePicker, CoreStack } from "@wrappid/core";
import moment from "moment";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreTimePickerDocs() {
  const [value, setValue] = React.useState(moment("2022-04-17T15:30"));

  return (
    <>
      <ComponentDocs
        component={CoreTimePicker}
        description={" "}
        samples={
          <>
            <CodeSample
              title={"Basic CoreTimePicker"}
              description={"Ability to set time ranges"}
              code={"<CoreTimePicker/>"}
              expandedCode={`import { CoreDateTimeRangePicker } from "@wrappid/core";
                
export default function BasicCoreTimePicker(){
  return(
    <CoreTimePicker/>
  );                
}`}
              renderElement={<>
                <CoreTimePicker/>
              </>}
            />

            <CodeSample
              title={"Uncontrolled vs. controlled value (NOT WORKING)"}
              description={"The value of the component can be uncontrolled or controlled."}
              code={`<CoreTimePicker
  label="Uncontrolled picker"
  defaultValue={moment("2022-04-17T15:30")}
/>
<CoreTimePicker
  label="Controlled picker"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>`}
              expandedCode={`import React from "react";
import { CoreStack, CoreTimePicker } from "@wrappid/core";
                
export default function TimePickerValue(){
  const [value, setValue] = React.useState(moment("2022-04-17T15:30"));

  return(
  <CoreStack direction="column" spacing={3}>
    <CoreTimePicker
      label="Uncontrolled picker"
      defaultValue={moment("2022-04-17T15:30")}
    />
    <CoreTimePicker
      label="Controlled picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  </CoreStack>
  );                
}`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreTimePicker
                    label="Uncontrolled picker"
                    defaultValue={moment("2022-04-17T15:30")}
                  />

                  <CoreTimePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Form props"}
              description={"The component can be disabled or read-only."}
              code={`<CoreTimePicker label="disabled" disabled />
<CoreTimePicker label="readOnly" value={value} readOnly />
<CoreTimePicker label="name" name="startTime" />`}
              expandedCode={`import React from "react";
import { CoreTimePicker, CoreStack } from "@wrappid/core";
                
export default function FormProps(){
  const [value, setValue] = React.useState(moment("2022-04-17T15:30"));

  return(
    <CoreStack direction="column" spacing={3}>
      <CoreTimePicker label="disabled" disabled />
      <CoreTimePicker label="readOnly" value={value} readOnly />
      <CoreTimePicker label="name" name="startTime" />
    </CoreStack>
  );                
}`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreTimePicker label="disabled" disabled />

                  <CoreTimePicker label="readOnly" value={value} readOnly />

                  <CoreTimePicker label="name" name="startTime" />
                </CoreStack>
              </>}
            />

            <CodeSample
              title={"Views"}
              description={"The component supports three views: hours, minutes and seconds.\n\
By default, the hours and minutes views are enabled. Use the views prop to change this behavior:"}
              code={`<CoreTimePicker views={["hours", "minutes", "seconds"]} format="hh:mm:ss" />
<CoreTimePicker views={["hours"]} />
<CoreTimePicker views={["minutes", "seconds"]} format="mm:ss" />`}
              expandedCode={`import { CoreTimePicker, CoreStack } from "@wrappid/core";
                
export default function Views(){
  return(
    <CoreStack direction="column" spacing={3}>
       <CoreTimePicker views={["hours", "minutes", "seconds"]} format="hh:mm:ss" />
       <CoreTimePicker views={["hours"]} />
       <CoreTimePicker views={["minutes", "seconds"]} format="mm:ss" />
     </CoreStack>
  );                
}`}
              renderElement={<>
                <CoreStack direction="column" spacing={3}>
                  <CoreTimePicker views={["hours", "minutes", "seconds"]} format="hh:mm:ss" />

                  <CoreTimePicker views={["hours"]} />

                  <CoreTimePicker views={["minutes", "seconds"]} format="mm:ss" />
                </CoreStack>
              </>}
            />
          </>
        }
      />
    </>
  );
}