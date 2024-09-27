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
      basicSample={false}
      samples={
        <>
          <CodeSample
            title="Basic Usage"
            description={`Below is a basic usage sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTableBody>
  <CoreTableRow>
    <CoreTableCell>Content 1</CoreTableCell>

    <CoreTableCell>Content 2</CoreTableCell>
  </CoreTableRow>

  <CoreTableRow>
    <CoreTableCell>Content 3</CoreTableCell>

    <CoreTableCell>Content 4</CoreTableCell>
  </CoreTableRow>
</CoreTableBody>`}
            expandedCode={`import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableRow 
} from "@wrappid/core";

export default function BasicCoreTableBody() {
  return (
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
  );
}`}
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