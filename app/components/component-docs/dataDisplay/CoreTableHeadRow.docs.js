import { CoreTableHeadRow } from "@wrappid/core";

import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableHeadRow;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableHeadRowDocs() {

  return <ComponentDocs
    component={CORE_COMPONENT}
    description={CORE_COMPONENT_NAME + " component that represents a table head row."}
  />;
}
