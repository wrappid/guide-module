import { CoreTable, CoreTableBodyCell } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableBodyCell;
const CORE_COMPONENT_NAME = "CoreTableBodyCell";

export default function CoreTableBodyCellDocs() {

  return (
    <>
      <ComponentDocs
        component={CORE_COMPONENT}
        description={CORE_COMPONENT_NAME + " component is used to display data in a table body cell."}
        basicSample={false}
        samples={
          <CodeSample
            title={"Basic " + CORE_COMPONENT_NAME}
            description={CORE_COMPONENT_NAME + " component is used to display data in a table body cell."}
            code={`<CoreTableBodyCell>DATA</CoreTableBodyCell>

<CoreTableBodyCell>DATA</CoreTableBodyCell>

<CoreTableBodyCell>DATA</CoreTableBodyCell>

<CoreTableBodyCell>DATA</CoreTableBodyCell>`}
            expandedCode={`import {
  CoreTable,
  CoreTableBodyCell
} from "@wrappid/core";

export default function BasicCoreTableBodyCell() {
  return (
    <CoreTable>
      <CoreTableBodyCell>DATA</CoreTableBodyCell>

      <CoreTableBodyCell>DATA</CoreTableBodyCell>

      <CoreTableBodyCell>DATA</CoreTableBodyCell>

      <CoreTableBodyCell>DATA</CoreTableBodyCell>
    </CoreTable>
  );
}`}
            renderElement={<>
              <CoreTable>
                <CoreTableBodyCell>DATA</CoreTableBodyCell>

                <CoreTableBodyCell>DATA</CoreTableBodyCell>

                <CoreTableBodyCell>DATA</CoreTableBodyCell>

                <CoreTableBodyCell>DATA</CoreTableBodyCell>
              </CoreTable>
            </>} />
        }/>
    </>
  );
}
