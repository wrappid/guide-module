import {
  CoreTable,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableHead;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableHeadDocs() {
  return (
    <>
      <ComponentDocs
        component={CORE_COMPONENT}
        description={`${CORE_COMPONENT_NAME}`}
        samples={
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={"A simple example of CoreTableHead."}
            code={`<CoreTable>
  <CoreTableHead>
    <CoreTableRow>
      <CoreTableCell>Header 1</CoreTableCell>

      <CoreTableCell>Header 2</CoreTableCell>
    </CoreTableRow>
  </CoreTableHead>

  <CoreTableBody>
    <CoreTableRow>
      <CoreTableCell>Body 1</CoreTableCell>

      <CoreTableCell>Body 2</CoreTableCell>
    </CoreTableRow>
  </CoreTableBody>
</CoreTable>`}
            renderElement={<>
              <CoreTable>
                <CoreTableHead>
                  <CoreTableRow>
                    <CoreTableCell>Header 1</CoreTableCell>

                    <CoreTableCell>Header 2</CoreTableCell>
                  </CoreTableRow>
                </CoreTableHead>

                <CoreTableBody>
                  <CoreTableRow>
                    <CoreTableCell>Body 1</CoreTableCell>

                    <CoreTableCell>Body 2</CoreTableCell>
                  </CoreTableRow>
                </CoreTableBody>
              </CoreTable>
            </>}
          />
        }/>
    </>
  );
}
