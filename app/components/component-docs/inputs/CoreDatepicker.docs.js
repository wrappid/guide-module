import React from "react";

import {
  CoreStack, CoreDatepicker, CoreList, CoreListItem, CoreTypographyBody1, CoreBox, CoreAlert, 
  CoreClasses
} from "@wrappid/core";
import moment from "moment";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreDatepickerDocs() {
  const [value, setValue] = React.useState(moment("2022-04-17"));
  const [cleared, setCleared] = React.useState (false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);
  return (
    <>
      <ComponentDocs
        component={CoreDatepicker}
        description="The CoreDatePicker component lets users select a date."
        samples={
          <>
            <CodeSample
              title={"Basic CoreDatePicker"}
              description={" "}
              code={"<CoreDatepicker/>"}
              expandedCode={`import { CoreDatePicker } from "@wrappid/core"
              
export default function BasicCoreDatePicker(){
  return(
    <CoreDatepicker/>
  );
}`}
              renderElement={
                <>
                  <CoreDatepicker/>
                </>
              }
            />

            <CodeSample
              title={"Uncontrolled vs. controlled value"}
              description={
                <>
                  <CoreTypographyBody1>
                  The value of the component can be uncontrolled or controlled.
                  </CoreTypographyBody1>
               
                  <CoreList variant="HTML" listType="DISC">
                    <CoreListItem>
                    The value is controlled when its parent manages it by providing a value prop.
                    </CoreListItem>

                    <CoreListItem>
                    The value is uncontrolled when it is managed by the component{"'"}s own internal state. This state can be initialized using the defaultValue prop.
                    </CoreListItem>
                  </CoreList>
                </>
              }
              code={`<CoreDatepicker label="Uncontrolled picker" defaultValue={moment("2022-04-17")} />
<CoreDatepicker
  label="Controlled picker"
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>`}
              expandedCode={`import moment from "moment";
import React from "react";
import { CoreStack, CoreDatePicker } from "@wrappid/core"
              
export default function DatePickerValue(){
  const [value, setValue] = React.useState(moment("2022-04-17"));

  return(
     <CoreStack direction="column" spacing={4}>
        <CoreDatepicker label="Uncontrolled picker" defaultValue={moment("2022-04-17")} />
        <CoreDatepicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="column" spacing={4}>
                    <CoreDatepicker label="Uncontrolled picker" defaultValue={moment("2022-04-17")} />

                    <CoreDatepicker
                      label="Controlled picker"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Form props"}
              description={
                <>
                  <CoreTypographyBody1>
                  The component can be disabled or read-only.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreDatepicker label="disabled" disabled />
<CoreDatepicker label="readOnly" readOnly />
<CoreDatepicker label="name" name="startDate" />`}
              expandedCode={`import { CoreStack, CoreDatePicker } from "@wrappid/core"
              
export default function FormPropsDatePickers(){
  return(
    <CoreStack direction="column" spacing={4}>
      <CoreDatepicker label="disabled" disabled />
      <CoreDatepicker label="readOnly" readOnly />
      <CoreDatepicker label="name" name="startDate" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="column" spacing={4}>
                    <CoreDatepicker label="disabled" disabled />

                    <CoreDatepicker label="readOnly" readOnly />

                    <CoreDatepicker label="name" name="startDate" />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Views (NOT WORKING)"}
              description={
                <>
                  <CoreTypographyBody1>
                  The component supports three views: day, month, and year.

By default, the day and year views are enabled. Use the views prop to change this behavior:

                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreDatepicker label="disabled" disabled />
<CoreDatepicker label="readOnly" readOnly />
<CoreDatepicker label="name" name="startDate" />`}
              expandedCode={`import { CoreStack, CoreDatePicker } from "@wrappid/core"
              
export default function FormPropsDatePickers(){
  return(
    <CoreStack direction="column" spacing={4}>
      <CoreDatepicker label="disabled" disabled />
      <CoreDatepicker label="readOnly" readOnly />
      <CoreDatepicker label="name" name="startDate" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="column" spacing={4}>
                    <CoreDatepicker
                      label={"\"year\", \"month\" and \"day\""}
                      views={["year", "month", "day"]}
                    />

                    <CoreDatepicker label={"\"day\""} views={["day"]} />

                    <CoreDatepicker label={"\"month\" and \"year\""} views={["month", "year"]} />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={" "}
              description={
                <>
                  <CoreTypographyBody1>
                  By default, the component renders the day view on mount. Use the openTo prop to change this behavior:
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreDatepicker label="disabled" disabled />
<CoreDatepicker label="readOnly" readOnly />
<CoreDatepicker label="name" name="startDate" />`}
              expandedCode={`import { CoreStack, CoreDatePicker } from "@wrappid/core"
              
export default function DatePickerOpenTo(){
  return(
    <CoreStack direction="column" spacing={4}>
      <CoreDatepicker label="disabled" disabled />
      <CoreDatepicker label="readOnly" readOnly />
      <CoreDatepicker label="name" name="startDate" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="column" spacing={4}>
                    <CoreDatepicker label={"\"year\""} openTo="year" />

                    <CoreDatepicker
                      label={"\"month\""}
                      openTo="month"
                      views={["year", "month", "day"]}
                    />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Helper Text"}
              description={
                <>
                  <CoreTypographyBody1>
                  You can show a helper text with the date format accepted:
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreDatepicker
  label="Helper text example"
  helperText="DD/MM/YYYY"
/>`}
              expandedCode={`import { CoreStack, CoreDatePicker } from "@wrappid/core"
              
export default function HelperText(){
  return(
   <CoreDatepicker
    label="Helper text example"
    helperText="DD/MM/YYYY"
  />
  );
}`}
              renderElement={
                <>
                  <CoreDatepicker
                    label="Helper text example"
                    helperText="DD/MM/YYYY"
                  />
                </>
              }
            />

            <CodeSample
              title={"Clearing the value (NOT WORKING)"}
              description={
                <>
                  <CoreTypographyBody1>
                  You can enable the clearable behavior:
                  </CoreTypographyBody1>
                </>
              }
              code={"NA"}
              expandedCode={`import {CoreDatepicker, CoreBox, CoreAlert, CoreClasses } from "@wrappid/core";

export default function ValueClearing(){
  return (
     <CoreBox
      styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.HEIGHT.H_100,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.POSITION.POSITION_RELATIVE,
        CoreClasses.WIDTH.W_100
      ]}
    
    >
      <CoreDatepicker
        width={260 }
        slotProps={{ field: { clearable: true, onClear: () => setCleared(true) } }}
      />

      {cleared && (
        <CoreAlert
          styleClasses={[CoreClasses.POSITION.BOTTOM_0, CoreClasses.POSITION.END_0, CoreClasses.POSITION.POSITION_ABSOLUTE]}
          // sx={{ bottom: 0, position: "absolute", right: 0 }}
          severity="success"
        >
        Field cleared!
        </CoreAlert>
  );
}`}
              renderElement={
                <>
                  <CoreBox
                    styleClasses={[
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.HEIGHT.H_100,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.POSITION.POSITION_RELATIVE,
                      CoreClasses.WIDTH.W_100
                    ]}
                  
                  >
                    <CoreDatepicker
                      width={260 }
                      slotProps={{ field: { clearable: true, onClear: () => setCleared(true) } }}
                    />

                    {cleared && (
                      <CoreAlert
                        styleClasses={[CoreClasses.POSITION.BOTTOM_0, CoreClasses.POSITION.END_0, CoreClasses.POSITION.POSITION_ABSOLUTE]}
                        // sx={{ bottom: 0, position: "absolute", right: 0 }}
                        severity="success"
                      >
                      Field cleared!
                      </CoreAlert>
                    )}
                  </CoreBox>
                </>
              }
            />
          </>
        }
      />
      
    </>
  );
}