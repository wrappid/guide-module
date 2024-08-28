import {
  CoreTable,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableCell;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableCellDocs() {
  return (
    <ComponentDocs
      component={CoreTableCell}
      description={`${CORE_COMPONENT_NAME} is used to display a cell in a table.`}
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={`A basic sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTable>
  <CoreTableBody>
    <CoreTableRow>
      <CoreTableCell>Regular Cell</CoreTableCell>

      <CoreTableCell align="right">Right-aligned Cell</CoreTableCell>
    </CoreTableRow>
  </CoreTableBody>
</CoreTable>`}
            renderElement={<>
              <CoreTable>
                <CoreTableBody>
                  <CoreTableRow>
                    <CoreTableCell>Regular Cell</CoreTableCell>

                    <CoreTableCell align="right">Right-aligned Cell</CoreTableCell>
                  </CoreTableRow>
                </CoreTableBody>
              </CoreTable>
            </>}
          />
      
        </>}/>
  );
}

