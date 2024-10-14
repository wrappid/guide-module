import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableFooter,
  CoreTableRow
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableFooter;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableFooterDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is used to group footer content in a table.`}
      basicSampleProps={{ children: <CoreTableCell>Footer Content</CoreTableCell> }}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} difference from CoreTableBody`}
            description={`Below is a sample of ${CORE_COMPONENT_NAME} with a representation of how it differs from CoreTableBody.`}
            code={`<CoreTableBody>
  <CoreTableRow>
    <CoreTableCell>Body Content</CoreTableCell>
  </CoreTableRow>
</CoreTableBody>

<CoreTableFooter>
  <CoreTableRow>
    <CoreTableCell>Footer Content</CoreTableCell>
  </CoreTableRow>
</CoreTableFooter>`}
            expandedCode={`import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableFooter,
  CoreTableRow
} from "@wrappid/core";

export default function SampleCoreTableFooterWithCoreTableBody() {
  return (
    <CoreTable>
      <CoreTableBody>
        <CoreTableRow>
          <CoreTableCell>Body Content</CoreTableCell>
        </CoreTableRow>
      </CoreTableBody>

      <CoreTableFooter>
        <CoreTableRow>
          <CoreTableCell>Footer Content</CoreTableCell>
        </CoreTableRow>
      </CoreTableFooter>
    </CoreTable>
  );
}`}
            renderElement={<>
              <CoreTable>
                <CoreTableBody>
                  <CoreTableRow>
                    <CoreTableCell>Body Content</CoreTableCell>
                  </CoreTableRow>
                </CoreTableBody>

                <CoreTableFooter>
                  <CoreTableRow>
                    <CoreTableCell>Footer Content</CoreTableCell>
                  </CoreTableRow>
                </CoreTableFooter>
              </CoreTable>
            </>}
          />
      
        </>
      }/>
  );
}
