import {
  CoreTable,
  CoreTableContainer,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody,
  CorePaper
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableContainer;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableContainerDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is a wrapper component that adds a border and sets the Table width`}
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={`A basic sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTableContainer component={CorePaper}>
  <CoreTable>
    <CoreTableBody>
      <CoreTableRow>
        <CoreTableCell>Content in a CoreTableContainer</CoreTableCell>
      </CoreTableRow>
    </CoreTableBody>
  </CoreTable>
</CoreTableContainer>`}
            renderElement={<>
              <CoreTableContainer component={CorePaper}>
                <CoreTable>
                  <CoreTableBody>
                    <CoreTableRow>
                      <CoreTableCell>Content in a CoreTableContainer</CoreTableCell>
                    </CoreTableRow>
                  </CoreTableBody>
                </CoreTable>
              </CoreTableContainer>
            </>}
          />
        </>
      }/>
  );
}
