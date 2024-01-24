import { CoreClasses, CoreH4, CoreTable, CoreTableHeadCell, CoreTableHeadRow } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTableHeadCellDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreTableHeadCell
      </CoreH4>

      <CodeSample
        title={"Simple CoreTableHeadCell"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
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

      <ComponentProps component={CoreTableHeadCell} />

    </>
  );
}
