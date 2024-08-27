import { CoreInput } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreInput;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreInputDocs() {

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component is a customizable input field that provides a user-friendly interface for collecting data.`}
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={`Below is an example of a basic ${CORE_COMPONENT_NAME} component.`}
            code={"<CoreInput helperText=\"Helper Text\" />"}
            expandedCode={`import { CoreInput } from "@wrappid/core";

export default function BasicCoreInput() {
  return (
    <CoreInput helperText="Helper Text" />
  );
}`}
            renderElement={
              <>
                <CoreInput helperText="Helper Text" />
              </>
            }
          />

          <CodeSample
            title={`Custom onChange ${CORE_COMPONENT_NAME}`}
            description={`Below is an example of a ${CORE_COMPONENT_NAME} component with a custom onChange function that logs the input in the console.`}
            code={`<CoreInput
  helperText="Helper Text"
  onChange={(event) => console.log(event.target.value)}
/>`}
            expandedCode={`import { CoreInput } from "@wrappid/core";

export default function onChangeCoreInput() {
  return (
    <CoreInput
      helperText="Helper Text"
      onChange={(event) => console.log(event.target.value)}
    />
  );
}`}
            renderElement={
              <CoreInput
                helperText="Helper Text"
                // eslint-disable-next-line no-console
                onChange={(event) => console.log("CoreInput: ", event)}
              />
            }
          />
        </>
      }/>
  );
}