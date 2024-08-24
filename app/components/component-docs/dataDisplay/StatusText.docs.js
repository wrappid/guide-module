import { useState } from "react";

import { 
  CoreClasses,
  CoreList,
  CoreTypographyBody1,
  CoreGrid,
  CoreSelect,
  CoreBox,
  StatusText
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = StatusText;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT.name);

/**
 * @todo
 * Auto render as per user selection prop and value, and combination constrains.
 * Move to a util
 * @param {*} props 
 * @returns 
 */
function getValidValues(props, propName) {
  const validValues = [];
  let requiredProp = props;

  requiredProp.forEach(prop => {
    if (prop.name === propName) {
      prop.types.forEach(type => {
        if (type.validValues && Array.isArray(type.validValues)) {
          validValues.push(...type.validValues);
        }
      });
    }
  });

  return validValues;
}

export default function StatusTextDocs() {
  const statusValues = getValidValues(StatusText.validProps, "status");
  const [statusValueItem, setStatusValueItem] = useState(statusValues[0]);
  const handleSelectChange = (event) => {
    setStatusValueItem(event.target.value);
  };

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={<>
        <CoreTypographyBody1>
          The {CORE_COMPONENT_NAME} component is used to display a status label with specific styling based on the status value provided. It ensures that the status is clearly visible and formatted according to the design guidelines. This component is ideal for use in tables, lists, or any other UI elements where a status indicator is required.
        </CoreTypographyBody1>

        <CoreTypographyBody1>

          Key Features
        </CoreTypographyBody1>

        <CoreList variant="HTML" listType="AUTO">
          <CoreTypographyBody1>Dynamic Styling: The component automatically applies color, weight, and casing based on the provided status.</CoreTypographyBody1>

          <CoreTypographyBody1>Customizable Layout: Accepts grid layout properties to integrate seamlessly within responsive layouts.</CoreTypographyBody1>

          <CoreTypographyBody1>Default Handling: If no status is provided, it defaults to displaying UNKNOWN with a secondary color.</CoreTypographyBody1>
        </CoreList>
      </>}
      samples={
        <>

          <CodeSample
            title={"Simple StatusText"}
            description={"Below is sample of StatusText. Via below drop down, different status prop values can be tried out."}
            code={`<StatusText status="${statusValueItem}" />`}
            expandedCode={`import { StatusText } from "@wrappid/core";

export default function ParagraphCoreTypographyBody1() {
  return (
    <StatusText status="${statusValueItem}" />
  );
}`}
            renderElement={<>
              <CoreGrid styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 3 } }}
                    id="statusValueItem"
                    value={statusValueItem}
                    handleChange={(event) => handleSelectChange(event)}
                    options={Object.keys(statusValues).map((key) => ({
                      id   : statusValues[key],
                      label: statusValues[key],
                      value: statusValues[key],
                    }))}
                  />
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreTypographyBody1>Select status</CoreTypographyBody1>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <StatusText status={`${statusValueItem}`} />
            
                </CoreBox>
              </CoreGrid>
            </>}
          />

        </>
      }/>
  );
}
