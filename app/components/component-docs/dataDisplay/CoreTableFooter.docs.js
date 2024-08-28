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
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={`A basic sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTable>
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
</CoreTable>`}
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
