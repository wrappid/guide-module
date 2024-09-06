import { CorePhone } from "@wrappid/core";

import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CorePhone;
const CORE_COMPONENT_NAME = CORE_COMPONENT?.name;

export default function CorePhoneDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component is made for Phone Number inputs.`}
    />
  );
}
