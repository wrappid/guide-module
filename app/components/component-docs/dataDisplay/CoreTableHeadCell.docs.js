import { CoreTable, CoreTableHeadCell, CoreTableHeadRow } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTableHeadCell;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableHeadCellDocs() {

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={CORE_COMPONENT_NAME + " component that represents a table head cell."}
      basicSample={false}
      samples={
        <CodeSample
          title={"Basic CoreTableHeadCell"}
          description={"A simple CoreTableHeadCell."}
          code={`
<CoreTable padding="checkbox">
  <CoreTableHeadCell>Dessert (100g serving)</CoreTableHeadCell>

  <CoreTableHeadCell>Calories</CoreTableHeadCell>

  <CoreTableHeadCell>Fat&nbsp;(g)</CoreTableHeadCell>

  <CoreTableHeadCell>Carbs&nbsp;(g)</CoreTableHeadCell>

  <CoreTableHeadCell>Protein&nbsp;(g)</CoreTableHeadCell>

  <CoreTableHeadRow></CoreTableHeadRow>

</CoreTable>

        
        `}
          renderElement={<>
            <CoreTable padding="checkbox">
              <CoreTableHeadCell>Dessert (100g serving)</CoreTableHeadCell>

              <CoreTableHeadCell>Calories</CoreTableHeadCell>

              <CoreTableHeadCell>Fat&nbsp;(g)</CoreTableHeadCell>

              <CoreTableHeadCell>Carbs&nbsp;(g)</CoreTableHeadCell>

              <CoreTableHeadCell>Protein&nbsp;(g)</CoreTableHeadCell>

              <CoreTableHeadRow></CoreTableHeadRow>
            
            </CoreTable>
          </>}
        />
      }/>
  );
}
