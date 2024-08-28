import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableRow
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableBody;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableBodyDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is used to group the body content of a table.`}
      samples={
        <>
          <CodeSample
            title="Basic Usage"
            description={`Below is a basic usage sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTable>
  <CoreTableBody>
    <CoreTableRow>
      <CoreTableCell>Content 1</CoreTableCell>

      <CoreTableCell>Content 2</CoreTableCell>
    </CoreTableRow>

    <CoreTableRow>
      <CoreTableCell>Content 3</CoreTableCell>

      <CoreTableCell>Content 4</CoreTableCell>
    </CoreTableRow>
  </CoreTableBody>
</CoreTable>`}
            expandedCode={""}
            renderElement={<>
              <CoreTable>
                <CoreTableBody>
                  <CoreTableRow>
                    <CoreTableCell>Content 1</CoreTableCell>

                    <CoreTableCell>Content 2</CoreTableCell>
                  </CoreTableRow>

                  <CoreTableRow>
                    <CoreTableCell>Content 3</CoreTableCell>

                    <CoreTableCell>Content 4</CoreTableCell>
                  </CoreTableRow>
                </CoreTableBody>
              </CoreTable>
            </>}
          />
        </>
      }
    /> );
}