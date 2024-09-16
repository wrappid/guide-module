import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableRow
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableRow;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableRowDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is used to group row content in a table.`}
      samples={
        <>
          <CodeSample
            title={"Basic CoreTableRow"}
            description={`A basic sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTableRow>
  <CoreTableCell>Row 1, Cell 1</CoreTableCell>

  <CoreTableCell>Row 1, Cell 2</CoreTableCell>
</CoreTableRow>

<CoreTableRow>
  <CoreTableCell>Row 2, Cell 1</CoreTableCell>

  <CoreTableCell>Row 2, Cell 2</CoreTableCell>
</CoreTableRow>`}
            expandedCode={`import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableRow
} from "@wrappid/core";

export default function SampleCoreTableRow() {
  return (
    <CoreTable>
      <CoreTableBody>
        <CoreTableRow>
          <CoreTableCell>Row 1, Cell 1</CoreTableCell>

          <CoreTableCell>Row 1, Cell 2</CoreTableCell>
        </CoreTableRow>

        <CoreTableRow>
          <CoreTableCell>Row 2, Cell 1</CoreTableCell>

          <CoreTableCell>Row 2, Cell 2</CoreTableCell>
        </CoreTableRow>
      </CoreTableBody>
    </CoreTable>
  );
}`}
            renderElement={<>
              <CoreTable>
                <CoreTableBody>
                  <CoreTableRow>
                    <CoreTableCell>Row 1, Cell 1</CoreTableCell>

                    <CoreTableCell>Row 1, Cell 2</CoreTableCell>
                  </CoreTableRow>

                  <CoreTableRow>
                    <CoreTableCell>Row 2, Cell 1</CoreTableCell>

                    <CoreTableCell>Row 2, Cell 2</CoreTableCell>
                  </CoreTableRow>
                </CoreTableBody>
              </CoreTable>
            </>}
          />
        </>
      }/>
  );
}

