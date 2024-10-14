import React, { useState } from "react";

import {
  CoreBox,
  CoreClasses,
  CorePaper,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableSortLabel
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

function createData(name, calories, fat, carbs, protein) {
  return { calories, carbs, fat, name, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function descendingComparator(aaa, bbb, orderBy) {
  if (bbb[orderBy] < aaa[orderBy]) {
    return -1;
  }
  if (bbb[orderBy] > aaa[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(ord, ordBy) {
  return ord === "desc"
    ? (aaa, bbb) => descendingComparator(aaa, bbb, ordBy)
    : (aaa, bbb) => -descendingComparator(aaa, bbb, ordBy);
}

const headCells = [
  { id: "name", label: "Dessert (100g serving)", numeric: false },
  { id: "calories", label: "Calories", numeric: true },
  { id: "fat", label: "Fat (g)", numeric: true },
  { id: "carbs", label: "Carbs (g)", numeric: true },
  { id: "protein", label: "Protein (g)", numeric: true },
];

function EnhancedTableHead(props) {
  const { ord, ordBy, onRequestSort } = props;

  const createSortHandler = (property) => (evt) => {
    onRequestSort(evt, property);
  };

  return (
    <CoreTableHead>
      <CoreTableRow>
        {headCells.map((headCell) => (
          <CoreTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
          >
            <CoreTableSortLabel
              active={ordBy === headCell.id}
              direction={ordBy === headCell.id ? ord : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}

              {ordBy === headCell.id ? (
                <CoreBox component="span" styleClasses={[CoreClasses.DISPLAY.NONE]}>
                  {ord === "desc" ? "sorted descending" : "sorted ascending"}
                </CoreBox>
              ) : null}
            </CoreTableSortLabel>
          </CoreTableCell>
        ))}
      </CoreTableRow>
    </CoreTableHead>
  );
}

const CORE_COMPONENT = CoreTableSortLabel;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTableSortLabelDocs() {
  const [ord, setOrd] = useState("asc");
  const [ordBy, setOrdBy] = useState("calories");

  const handleRequestSort = (evt, property) => {
    const isAsc = ordBy === property && ord === "asc";

    setOrd(isAsc ? "desc" : "asc");
    setOrdBy(property);
  };

  const sortedRows = React.useMemo(
    () => [...rows].sort(getComparator(ord, ordBy)),
    [ord, ordBy]
  );

  const [simpleOrd, setSimpleOrd] = useState("asc");
  const [simpleOrdBy, setSimpleOrdBy] = useState("name");

  const simpleData = [{ calories: 95, name: "Apple" }, { calories: 105, name: "Banana" }, { calories: 45, name: "Orange" }, { calories: 102, name: "Pear" }];

  const handleSimpleSort = (property) => {
    const isAsc = simpleOrdBy === property && simpleOrd === "asc";

    setSimpleOrd(isAsc ? "desc" : "asc");
    setSimpleOrdBy(property);
  };

  const sortedSimpleData = React.useMemo(() => {
    return [...simpleData].sort((aaa, bbb) => {
      if (simpleOrd === "asc") {
        return aaa[simpleOrdBy] > bbb[simpleOrdBy] ? 1 : -1;
      } else {
        return aaa[simpleOrdBy] < bbb[simpleOrdBy] ? 1 : -1;
      }
    });
  }, [simpleOrd, simpleOrdBy]);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} adds sorting functionality to table column headers. It displays the current sort direction and handles sort events when clicked. This component integrates seamlessly with other Wrappid table components to create interactive, sortable tables. Use ${CORE_COMPONENT_NAME} to enable user-friendly data sorting.`}
      basicSample={false}
      samples={
        <>

          <CodeSample
            title={"Sample implementation of CoreTableSortLabel"}
            description={"This example shows a simple implementation of CoreTableSortLabel with basic sorting functionality."}
            code={`<CoreTableHead>
  <CoreTableRow>
    <CoreTableCell>
      <CoreTableSortLabel
        active={simpleOrdBy === "name"}
        direction={simpleOrdBy === "name" ? simpleOrd : "asc"}
        onClick={() => handleSimpleSort("name")}
      >
        Fruit Name
      </CoreTableSortLabel>
    </CoreTableCell>

    <CoreTableCell>
      <CoreTableSortLabel
        active={simpleOrdBy === "calories"}
        direction={simpleOrdBy === "calories" ? simpleOrd : "asc"}
        onClick={() => handleSimpleSort("calories")}
      >
        Calories
      </CoreTableSortLabel>
    </CoreTableCell>
  </CoreTableRow>
</CoreTableHead>

<CoreTableBody>
  {sortedSimpleData.map((row) => (
    <CoreTableRow key={row.name}>
      <CoreTableCell>{row.name}</CoreTableCell>

      <CoreTableCell>{row.calories}</CoreTableCell>
    </CoreTableRow>
  ))}
</CoreTableBody>`}
            expandedCode={`import React, { useState } from "react";

import {
  CoreClasses,
  CorePaper,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableSortLabel
} from "@wrappid/core";

export default function SampleCoreTableSortLabel() {
  
  const [simpleOrd, setSimpleOrd] = useState("asc");
  const [simpleOrdBy, setSimpleOrdBy] = useState("name");

  const simpleData = [{ calories: 95, name: "Apple" }, { calories: 105, name: "Banana" }, { calories: 45, name: "Orange" }, { calories: 102, name: "Pear" }];

  const handleSimpleSort = (property) => {
    const isAsc = simpleOrdBy === property && simpleOrd === "asc";

    setSimpleOrd(isAsc ? "desc" : "asc");
    setSimpleOrdBy(property);
  };

  const sortedSimpleData = React.useMemo(() => {
    return [...simpleData].sort((aaa, bbb) => {
      if (simpleOrd === "asc") {
        return aaa[simpleOrdBy] > bbb[simpleOrdBy] ? 1 : -1;
      } else {
        return aaa[simpleOrdBy] < bbb[simpleOrdBy] ? 1 : -1;
      }
    });
  }, [simpleOrd, simpleOrdBy]);

  return (
    <CorePaper>
      <CoreTableContainer>
        <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
          <CoreTableHead>
            <CoreTableRow>
              <CoreTableCell>
                <CoreTableSortLabel
                  active={simpleOrdBy === "name"}
                  direction={simpleOrdBy === "name" ? simpleOrd : "asc"}
                  onClick={() => handleSimpleSort("name")}
                >
                            Fruit Name
                </CoreTableSortLabel>
              </CoreTableCell>

              <CoreTableCell>
                <CoreTableSortLabel
                  active={simpleOrdBy === "calories"}
                  direction={simpleOrdBy === "calories" ? simpleOrd : "asc"}
                  onClick={() => handleSimpleSort("calories")}
                >
                            Calories
                </CoreTableSortLabel>
              </CoreTableCell>
            </CoreTableRow>
          </CoreTableHead>

          <CoreTableBody>
            {sortedSimpleData.map((row) => (
              <CoreTableRow key={row.name}>
                <CoreTableCell>{row.name}</CoreTableCell>

                <CoreTableCell>{row.calories}</CoreTableCell>
              </CoreTableRow>
            ))}
          </CoreTableBody>
        </CoreTable>
      </CoreTableContainer>
    </CorePaper>
  );
}`}
            renderElement={<>
              <CorePaper>
                <CoreTableContainer>
                  <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
                    <CoreTableHead>
                      <CoreTableRow>
                        <CoreTableCell>
                          <CoreTableSortLabel
                            active={simpleOrdBy === "name"}
                            direction={simpleOrdBy === "name" ? simpleOrd : "asc"}
                            onClick={() => handleSimpleSort("name")}
                          >
                            Fruit Name
                          </CoreTableSortLabel>
                        </CoreTableCell>

                        <CoreTableCell>
                          <CoreTableSortLabel
                            active={simpleOrdBy === "calories"}
                            direction={simpleOrdBy === "calories" ? simpleOrd : "asc"}
                            onClick={() => handleSimpleSort("calories")}
                          >
                            Calories
                          </CoreTableSortLabel>
                        </CoreTableCell>
                      </CoreTableRow>
                    </CoreTableHead>

                    <CoreTableBody>
                      {sortedSimpleData.map((row) => (
                        <CoreTableRow key={row.name}>
                          <CoreTableCell>{row.name}</CoreTableCell>

                          <CoreTableCell>{row.calories}</CoreTableCell>
                        </CoreTableRow>
                      ))}
                    </CoreTableBody>
                  </CoreTable>
                </CoreTableContainer>
              </CorePaper>
            </>}
          />
          
          <CodeSample
            title={"Multiple CoreTableSortLabel"}
            description={"This example demonstrates a more complex implementation of CoreTableSortLabel with multiple sortable columns and custom sorting logic."}
            code={`<CoreTableContainer>
  <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
    <EnhancedTableHead
      ord={ord}
      ordBy={ordBy}
      onRequestSort={handleRequestSort}
    />

    <CoreTableBody>
      {sortedRows.map((row) => (
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
            expandedCode={`import React, { useState } from "react";

import {
  CoreBox,
  CoreClasses,
  CorePaper,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableContainer,
  CoreTableHead,
  CoreTableRow,
  CoreTableSortLabel
} from "@wrappid/core";

function createData(name, calories, fat, carbs, protein) {
  return { calories, carbs, fat, name, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function descendingComparator(aaa, bbb, orderBy) {
  if (bbb[orderBy] < aaa[orderBy]) {
    return -1;
  }
  if (bbb[orderBy] > aaa[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(ord, ordBy) {
  return ord === "desc"
    ? (aaa, bbb) => descendingComparator(aaa, bbb, ordBy)
    : (aaa, bbb) => -descendingComparator(aaa, bbb, ordBy);
}

const headCells = [
  { id: "name", label: "Dessert (100g serving)", numeric: false },
  { id: "calories", label: "Calories", numeric: true },
  { id: "fat", label: "Fat (g)", numeric: true },
  { id: "carbs", label: "Carbs (g)", numeric: true },
  { id: "protein", label: "Protein (g)", numeric: true },
];

function EnhancedTableHead(props) {
  const { ord, ordBy, onRequestSort } = props;

  const createSortHandler = (property) => (evt) => {
    onRequestSort(evt, property);
  };

  return (
    <CoreTableHead>
      <CoreTableRow>
        {headCells.map((headCell) => (
          <CoreTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
          >
            <CoreTableSortLabel
              active={ordBy === headCell.id}
              direction={ordBy === headCell.id ? ord : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
  
              {ordBy === headCell.id ? (
                <CoreBox component="span" styleClasses={[CoreClasses.DISPLAY.NONE]}>
                  {ord === "desc" ? "sorted descending" : "sorted ascending"}
                </CoreBox>
              ) : null}
            </CoreTableSortLabel>
          </CoreTableCell>
        ))}
      </CoreTableRow>
    </CoreTableHead>
  );
}

export default function MultipleCoreTableSortLabel() {
  
  const [ord, setOrd] = useState("asc");
  const [ordBy, setOrdBy] = useState("calories");

  const handleRequestSort = (_event, property) => {
    const isAsc = ordBy === property && ord === "asc";

    setOrd(isAsc ? "desc" : "asc");
    setOrdBy(property);
  };

  const sortedRows = React.useMemo(
    () => [...rows].sort(getComparator(ord, ordBy)),
    [ord, ordBy]
  );

  return (
    <CorePaper>
      <CoreTableContainer>
        <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
          <EnhancedTableHead
            ord={ord}
            ordBy={ordBy}
            onRequestSort={handleRequestSort}
          />

          <CoreTableBody>
            {sortedRows.map((row) => (
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
    </CorePaper>
  );
}`}
            renderElement={<>
              <CorePaper>
                <CoreTableContainer>
                  <CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_100]}>
                    <EnhancedTableHead
                      ord={ord}
                      ordBy={ordBy}
                      onRequestSort={handleRequestSort}
                    />

                    <CoreTableBody>
                      {sortedRows.map((row) => (
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
              </CorePaper>
            </>}
          />
        </>
      }
    />
  );
}