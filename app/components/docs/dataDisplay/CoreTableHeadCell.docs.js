import { CoreClasses, CoreH4, CoreTable, CoreTableHeadCell, CoreTableHeadRow } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
function createData(name, calories, fat, carbs, protein) {
  return { calories, carbs, fat, name, protein };
}
export default function CoreTableHeadCellDocs() {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

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
