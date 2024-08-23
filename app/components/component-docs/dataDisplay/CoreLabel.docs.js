import {
  CoreBox,
  CoreLabel,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreLabel;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreLabelDocs() {
  return (
    <ComponentDocs
      component={CoreLabel}
      description={`${CORE_COMPONENT_NAME} helps to put a label on a component.`}
      samples={
        <>
          <CodeSample
            title={`Sample ${CORE_COMPONENT_NAME}`}
            description={`Below is an example of ${CORE_COMPONENT_NAME} usage.`}
            code={`<CoreLabel>I am CoreLabel</CoreLabel>
<CoreTypographyBody1>Above text is a sample CoreLabel</CoreTypographyBody1>
`}
            expandedCode={`import {
  CoreBox,
  CoreLabel,
  CoreTypographyBody1 
} from "@wrappid/core";

export default function SampleCoreLabel() {
  return (
    <>
      <CoreBox>
        <CoreLabel>I am CoreLabel</CoreLabel>

        <CoreTypographyBody1>Above text is a sample CoreLabel</CoreTypographyBody1>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreLabel>I am CoreLabel</CoreLabel>

                  <CoreTypographyBody1>Above text is a sample CoreLabel</CoreTypographyBody1>
                </CoreBox>

              </>
            }
          />
        </>
      }
    />
  );
}