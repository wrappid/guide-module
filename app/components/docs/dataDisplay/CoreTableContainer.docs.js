import {
  CoreH4,
  CoreTypographyBody1,
  CoreTable,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody,
  CoreClasses
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreTableContainerDocs() {
  return (
    <>
      <CoreH4>CoreTableContainer</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic CoreTableContainer"}
        description={"A simple example of CoreTableContainer."}
        code={`<CoreTableContainer >
<CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} aria-label="simple table">
  <CoreTableHead>
    <CoreTableRow>
      <CoreTableCell>Dessert (100g serving)</CoreTableCell>

      <CoreTableCell align="right">Calories</CoreTableCell>

      <CoreTableCell align="right">Fat&nbsp;(g)</CoreTableCell>

      <CoreTableCell align="right">Carbs&nbsp;(g)</CoreTableCell>

      <CoreTableCell align="right">Protein&nbsp;(g)</CoreTableCell>
    </CoreTableRow>
  </CoreTableHead>

  <CoreTableBody>
    {rows.map((row) => (
      <CoreTableRow
        key={row.name}
      >
        <CoreTableCell component="th" scope="row">
          {row.name}
        </CoreTableCell>

        <CoreTableCell align="right">{row.calories}</CoreTableCell>

        <CoreTableCell align="right">{row.fat}</CoreTableCell>

        <CoreTableCell align="right">{row.carbs}</CoreTableCell>

        <CoreTableCell align="right">{row.protein}</CoreTableCell>
      </CoreTableRow>
    ))}
  </CoreTableBody>
</CoreTable>
</CoreTableContainer>`}
        renderElement={<>
          <CoreTableContainer >
            <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} aria-label="simple table">
              <CoreTableHead>
                <CoreTableRow>
                  <CoreTableCell>Dessert (100g serving)</CoreTableCell>

                  <CoreTableCell align="right">Calories</CoreTableCell>

                  <CoreTableCell align="right">Fat&nbsp;(g)</CoreTableCell>

                  <CoreTableCell align="right">Carbs&nbsp;(g)</CoreTableCell>

                  <CoreTableCell align="right">Protein&nbsp;(g)</CoreTableCell>
                </CoreTableRow>
              </CoreTableHead>

              <CoreTableBody>
                {rows.map((row) => (
                  <CoreTableRow
                    key={row.name}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <CoreTableCell component="th" scope="row">
                      {row.name}
                    </CoreTableCell>

                    <CoreTableCell align="right">{row.calories}</CoreTableCell>

                    <CoreTableCell align="right">{row.fat}</CoreTableCell>

                    <CoreTableCell align="right">{row.carbs}</CoreTableCell>

                    <CoreTableCell align="right">{row.protein}</CoreTableCell>
                  </CoreTableRow>
                ))}
              </CoreTableBody>
            </CoreTable>
          </CoreTableContainer>
        </>}
      />
        
      {/* <ComponentProps component={CoreTableContainer} /> */}
      
    </>
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { calories, carbs, fat, name, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];