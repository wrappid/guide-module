import React from "react";

import {
  CoreTable,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody,
  CoreClasses,
  CorePaper,
  CoreTablePagination,
  CoreTypographyCaption
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const createData = (name, calories, fat, carbs, protein) => {
  return { calories, carbs, fat, name, protein };
};

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

const createDataForRowss = (name, code, population, size) => {
  const density = population / size;

  return { code, density, name, population, size };
};

const rowss = [
  createDataForRowss("India", "IN", 1324171354, 3287263),
  createDataForRowss("China", "CN", 1403500365, 9596961),
  createDataForRowss("Italy", "IT", 60483973, 301340),
  createDataForRowss("United States", "US", 327167434, 9833520),
  createDataForRowss("Canada", "CA", 37602103, 9984670),
  createDataForRowss("Australia", "AU", 25475400, 7692024),
  createDataForRowss("Germany", "DE", 83019200, 357578),
  createDataForRowss("Ireland", "IE", 4857000, 70273),
  createDataForRowss("Mexico", "MX", 126577691, 1972550),
  createDataForRowss("Japan", "JP", 126317000, 377973),
  createDataForRowss("France", "FR", 67022000, 640679),
  createDataForRowss("United Kingdom", "GB", 67545757, 242495),
  createDataForRowss("Russia", "RU", 146793744, 17098246),
  createDataForRowss("Nigeria", "NG", 200962417, 923768),
  createDataForRowss("Brazil", "BR", 210147125, 8515767),
];

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

  const CORE_COMPONENT = CoreTable;
  const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component is used to display data in a tabular format.`}
      basicSample={false}
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={"A simple example with no frills."}
            code={`<CoreTableContainer>
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
</CoreTableContainer>`}
            expandedCode={""}
            renderElement={<>
              <CoreTableContainer>
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

          <CodeSample
            title={"Dense table"}
            description={"A simple example of a dense table with no frills."}
            code={`<CoreTableContainer>
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
</CoreTableContainer>`}
            expandedCode={""}
            renderElement={<>
              <CoreTableContainer>
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

          <CodeSample
            title={"Sticky header"}
            description={"Here is an example of a table with scrollable rows and fixed column headers. It leverages the stickyHeader prop. (⚠️ no IE 11 support)"}
            code={`<CorePaper styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_HIDDEN, CoreClasses.WIDTH.W_100]}>
  <CoreTableContainer styleClasses={[CoreClasses.HEIGHT.MAX_H_50]}>
    <CoreTable stickyHeader aria-label="sticky table">
      <CoreTableHead>
        <CoreTableRow>
          {columns.map((column) => (
            <CoreTableCell
              key={column.id}
              align={column.align}
              styleClasses={[CoreClasses.WIDTH.MIN_W_\${column.minWidth}]}
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
              <CoreTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
    component="CoreBox"
    count={rowss.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
</CorePaper>`}
            expandedCode={""}
            renderElement={<>
              <CorePaper styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_HIDDEN, CoreClasses.WIDTH.W_100]}>
                <CoreTableContainer styleClasses={[CoreClasses.HEIGHT.MAX_H_50]}>
                  <CoreTable stickyHeader aria-label="sticky table">
                    <CoreTableHead>
                      <CoreTableRow>
                        {columns.map((column) => (
                          <CoreTableCell
                            key={column.id}
                            align={column.align}
                            styleClasses={[CoreClasses.WIDTH.MIN_W_170]}
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
                  component="CoreBox"
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
            title={"Accessibility"}
            description={"Caption: A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it's about and decide if they want to read it."}
            code={`<CoreTableContainer>
  <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} aria-label="caption table">
  <CoreTypographyCaption>A basic table example with a caption</CoreTypographyCaption>
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
</CoreTableContainer>`}
            expandedCode={""}
            renderElement={<>
              <CoreTableContainer>
                <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_50]} aria-label="caption table">
                  <CoreTypographyCaption>A basic table example with a caption</CoreTypographyCaption>

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
        </>
      }
    />
  );
}