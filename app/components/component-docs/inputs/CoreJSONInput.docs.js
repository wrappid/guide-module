import { CoreJSONInput } from "@wrappid/core";

import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreJSONInput;
const CORE_COMPONENT_NAME = CORE_COMPONENT?.name;

export default function CoreJSONInputDocs() {
  return (
    <>
      <ComponentDocs
        component={CORE_COMPONENT}
        description={`The ${CORE_COMPONENT_NAME} component is made for JSON field inputs.`}
        basicSample={true}
      />
    </>
  );
}