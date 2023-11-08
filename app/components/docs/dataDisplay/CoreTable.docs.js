import * as React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreTable,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody,
  CoreClasses,
  CorePaper,
  CoreTablePagination
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTableDocs() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <CoreH4>CoreTable</CoreH4>

      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic table"}
        description={"A simple example with no frills."}
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

      <CodeSample
        title={"Data table (CoreDataGrid NOT_WORKING)"}
        description={"The CoreTable component has a close mapping to the native <table> elements. This constraint makes building rich data tables challenging.\
        The DataGrid component is designed for use-cases that are focused on handling large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features."}
        code={`<div style={{ height: 400, width: "100%" }}>
  <CoreDataGrid
    rows={rows1}
    columns={columns}
    initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
  />
</div>     `}
        renderElement={<>
          
        </>}
      />

      <CodeSample
        title={"Dense table "}
        description={"A simple example of a dense table with no frills."}
        code={`<CoreTableContainer >
<CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} size="small" aria-label="a dense table">
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
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
        `}
        renderElement={<>
          <CoreTableContainer >
            <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} size="small" aria-label="a dense table">
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
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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

      <CodeSample
        title={"Sorting & selecting (NOT_WOKING)"}
        description={"This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.\
        The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the CoreTablePagination component is used outside of the Table. (The 'Custom Table Pagination Action' example below shows the pagination within the TableFooter.)"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
        </>}
      />

      <CodeSample
        title={"Customization (NOT_DEFINED)"}
        description={"Here is an example of customizing the component."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Sticky header"}
        description={"Here is an example of a table with scrollable rows and fixed column headers. It leverages the stickyHeader prop. (⚠️ no IE 11 support)"}
        code={`<CorePaper styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_HIDDEN, CoreClasses.WIDTH.W_100]} >
<CoreTableContainer styleClasses={[CoreClasses.HEIGHT.MAX_H_50]}>
  <CoreTable stickyHeader aria-label="sticky table">
    <CoreTableHead>
      <CoreTableRow>
        {columns.map((column) => (
          <CoreTableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </CoreTableCell>
        ))}
      </CoreTableRow>
    </CoreTableHead>

    <CoreTableBody>
      {rowss
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <CoreTableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={row.code}>
              {columns.map((column) => {
                const value = row[column.id];

                return (
                  <CoreTableCell key={column.id} align={column.align}>
                    {column.format && typeof value === "number"
                      ? column.format(value)
                      : value}
                  </CoreTableCell>
                );
              })}
            </CoreTableRow>
          );
        })}
    </CoreTableBody>
  </CoreTable>
</CoreTableContainer>

<CoreTablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={rowss.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
</CorePaper>
        `}
        renderElement={<>
          <CorePaper styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_HIDDEN, CoreClasses.WIDTH.W_100]} >
            <CoreTableContainer styleClasses={[CoreClasses.HEIGHT.MAX_H_50]}>
              <CoreTable stickyHeader aria-label="sticky table">
                <CoreTableHead>
                  <CoreTableRow>
                    {columns.map((column) => (
                      <CoreTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </CoreTableCell>
                    ))}
                  </CoreTableRow>
                </CoreTableHead>

                <CoreTableBody>
                  {rowss
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <CoreTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];

                            return (
                              <CoreTableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </CoreTableCell>
                            );
                          })}
                        </CoreTableRow>
                      );
                    })}
                </CoreTableBody>
              </CoreTable>
            </CoreTableContainer>

            <CoreTablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowss.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CorePaper>
        
        </>}
      />

      <CodeSample
        title={"Column grouping (NOT_WORKING)"}
        description={"You can group column headers by rendering multiple table rows inside a table head:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CorePaper styleClasses={[CoreClasses.WIDTH.W_100]}>
            <CoreTableContainer styleClasses={[CoreClasses.HEIGHT.MAX_H_50]}>
              <CoreTable stickyHeader aria-label="sticky table">
                <CoreTableHead>
                  <CoreTableRow>
                    <CoreTableCell align="center" colSpan={2}>
                Country
                    </CoreTableCell>

                    <CoreTableCell align="center" colSpan={3}>
                Details
                    </CoreTableCell>
                  </CoreTableRow>

                  <CoreTableRow>
                    {columns.map((column) => (
                      <CoreTableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, top: 57 }}
                      >
                        {column.label}
                      </CoreTableCell>
                    ))}
                  </CoreTableRow>
                </CoreTableHead>

                <CoreTableBody>
                  {rowss
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <CoreTableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];

                            return (
                              <CoreTableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </CoreTableCell>
                            );
                          })}
                        </CoreTableRow>
                      );
                    })}
                </CoreTableBody>
              </CoreTable>
            </CoreTableContainer>

            <CoreTablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowss.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CorePaper>
        </>}
      />
Collapsible table

      <CodeSample
        title={"Collapsible table(NOT_WORKING)"}
        description={"An example of a table with expandable rows, revealing more information. It utilizes the Collapse component."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Spanning table(NOT_WORKING)"}
        description={"A simple example with spanning rows & columns."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreTableContainer >
            <CoreTable sx={{ minWidth: 700 }} aria-label="spanning table">
              <CoreTableHead>
                <CoreTableRow>
                  <CoreTableCell align="center" colSpan={3}>
              Details
                  </CoreTableCell>

                  <CoreTableCell align="right">Price</CoreTableCell>
                </CoreTableRow>

                <CoreTableRow>
                  <CoreTableCell>Desc</CoreTableCell>

                  <CoreTableCell align="right">Qty.</CoreTableCell>

                  <CoreTableCell align="right">Unit</CoreTableCell>

                  <CoreTableCell align="right">Sum</CoreTableCell>
                </CoreTableRow>
              </CoreTableHead>

              <CoreTableBody>
                {rows.map((row) => (
                  <CoreTableRow key={row.desc}>
                    <CoreTableCell>{row.desc}</CoreTableCell>

                    <CoreTableCell align="right">{row.qty}</CoreTableCell>

                    <CoreTableCell align="right">{row.unit}</CoreTableCell>

                    <CoreTableCell align="right">{ccyFormat(row.price)}</CoreTableCell>
                  </CoreTableRow>
                ))}

                <CoreTableRow>
                  <CoreTableCell rowSpan={3} />

                  <CoreTableCell colSpan={2}>Subtotal</CoreTableCell>

                  <CoreTableCell align="right">{ccyFormat(invoiceSubtotal)}</CoreTableCell>
                </CoreTableRow>

                <CoreTableRow>
                  <CoreTableCell>Tax</CoreTableCell>

                  <CoreTableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</CoreTableCell>

                  <CoreTableCell align="right">{ccyFormat(invoiceTaxes)}</CoreTableCell>
                </CoreTableRow>

                <CoreTableRow>
                  <CoreTableCell colSpan={2}>Total</CoreTableCell>

                  <CoreTableCell align="right">{ccyFormat(invoiceTotal)}</CoreTableCell>
                </CoreTableRow>
              </CoreTableBody>
            </CoreTable>
          </CoreTableContainer> */}
        
        </>}
      />

      <CodeSample
        title={"Virtualized table (NOT_WORKING)"}
        description={"In the following example, we demonstrate how to use react-virtuoso with the Table component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper> */}

        </>}
      />

      <CodeSample
        title={"Accessibility (NOT_DEFINED)"}
        description={`Caption
        A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it's about and decide if they want to read it.`}
        code={`<CoreTableContainer >
<CoreTable styleClasses= {[CoreClasses.WIDTH.MIN_W_50]} aria-label="caption table">
  <caption>A basic table example with a caption</caption>

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
      <CoreTableRow key={row.name}>
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
        `}
        renderElement={<>
          <CoreTableContainer >
            <CoreTable styleClasses= {[CoreClasses.WIDTH.MIN_W_50]} aria-label="caption table">
              <caption>A basic table example with a caption</caption>

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
                  <CoreTableRow key={row.name}>
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

      <ComponentProps component={CoreTable} />
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

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    align   : "right",
    format  : (value) => value.toLocaleString("en-US"),
    id      : "population",
    label   : "Population",
    minWidth: 170,
  },
  {
    align   : "right",
    format  : (value) => value.toLocaleString("en-US"),
    id      : "size",
    label   : "Size\u00a0(km\u00b2)",
    minWidth: 170,
  },
  {
    align   : "right",
    format  : (value) => value.toFixed(2),
    id      : "density",
    label   : "Density",
    minWidth: 170,
  },
];

function createDataa(name, code, population, size) {
  const density = population / size;

  return { code, density, name, population, size };
}

const rowss = [
  createDataa("India", "IN", 1324171354, 3287263),
  createDataa("China", "CN", 1403500365, 9596961),
  createDataa("Italy", "IT", 60483973, 301340),
  createDataa("United States", "US", 327167434, 9833520),
  createDataa("Canada", "CA", 37602103, 9984670),
  createDataa("Australia", "AU", 25475400, 7692024),
  createDataa("Germany", "DE", 83019200, 357578),
  createDataa("Ireland", "IE", 4857000, 70273),
  createDataa("Mexico", "MX", 126577691, 1972550),
  createDataa("Japan", "JP", 126317000, 377973),
  createDataa("France", "FR", 67022000, 640679),
  createDataa("United Kingdom", "GB", 67545757, 242495),
  createDataa("Russia", "RU", 146793744, 17098246),
  createDataa("Nigeria", "NG", 200962417, 923768),
  createDataa("Brazil", "BR", 210147125, 8515767),
];

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);

  return { desc, price, qty, unit };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const Rows = [createRow("Paperclips (Box)", 100, 1.15), createRow("Paper (Case)", 10, 45.99), createRow("Waste Basket", 2, 17.99)];

const invoiceSubtotal = subtotal(Rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

