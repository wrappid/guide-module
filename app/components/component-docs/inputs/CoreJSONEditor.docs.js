import { CoreJSONEditor } from "@wrappid/core";

import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreJSONEditor;
const CORE_COMPONENT_NAME = CORE_COMPONENT?.name;

export default function CoreJSONEditorDocs() {
  return (
    <>
      <ComponentDocs
        component={CORE_COMPONENT}
        description={`The ${CORE_COMPONENT_NAME} component is made for JSON field inputs.`}
        basicSample={true}
        basicSampleProps={{ label: "Json Editor" }}
      />
    </>
  );
}