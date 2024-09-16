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
        basicSampleProps={{
          children: <CoreTableRow>
            <CoreTableCell>Header 1</CoreTableCell></CoreTableRow>
        }}
        samples={
          <CodeSample
            title={`${CORE_COMPONENT_NAME} with CoreTableBody representation`}
            description={"A sample with CoreTableHead and CoreTableBody."}
            code={`<CoreTableHead>
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
</CoreTableBody>`}
            expandedCode={`import {
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableHead,
  CoreTableRow
} from "@wrappid/core";

export default function SampleCoreTableHeadWithCoreTableBody() {
  return (
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
  );
}`}
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
